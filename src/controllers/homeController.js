const express = require("express");
const connection = require("../config/database");

const {
  GetProduct,
  GetProduct_item,
  GetCart,
  getDelete,
  getDeleteAfter,
  getColor1,
  getSell,
  getAllCustomer,
  getSum,
  getName,
  getdata,
  getcheck1,
} = require("../services/crudservice");

// Export the set object
let color = "black";
let id_Customer = 0;
let id_cart = 0;
const getHomepage = async (req, res) => {
  color = "black";
  let results = await GetProduct();
  let results1 = await getDeleteAfter(id_Customer);
  let results2 = await getAllCustomer();
  let Name = await getName(id_Customer);
  return res.render("home.ejs", {
    product: results,
    results1: results1,
    customer: results2,
    Name: Name,
  });
};
const getProductDetail = async (req, res) => {
  let id = req.params.id;
  let results = await GetProduct_item(id);
  let results1 = await getDeleteAfter(id_Customer);
  let Name = await getName(id_Customer);
  return res.render("link-product.ejs", {
    product_item: results,
    results1: results1,
    color: color,
    Name: Name,
  });
};

const getCart1 = async (req, res) => {
  let id = req.params.id;
  let results = await GetCart(id, color, id_Customer);


  res.redirect("/cart");
};
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  let color1 = req.params.color;
  let results = await getDelete(id, color1, id_Customer);
  res.redirect("/cart");
};
const getCartAfter = async (req, res) => {
  let results = await getDeleteAfter(id_Customer);
  let Name = await getName(id_Customer);
  return res.render("cart.ejs", { cart: results , Name: Name });
};
const getAddtocart = async (req, res) => {
  let id = req.params.id;
  let results_1 = await GetCart(id, color, id_Customer);
  res.redirect(`/ProductDetail/${id}`);
};
const getColor = async (req, res) => {
  color = req.body.color;
  const id = req.params.id;
  console.log(color);
  res.redirect(`/ProductDetail/${id}`);
};

const getSellProduct = async (req, res) => {
  let results = await getSell(id_Customer);
  let product = await getSum(id_Customer);
  let Name = await getName(id_Customer);
  console.log(results);
  return res.render("sell.ejs", { cart: results, product: product , Name: Name});
};

const getCheck = async (req, res) => {
  let result = await getdata(id_Customer);

  const data_1 = await Promise.all(
    result.map(async (item) => {
      // Fetch additional data for each id_cart
      let additionalData = await getcheck1(item.id_cart);

      return {
        id_Customer: item.id_Customer,
        Name: item.Name,
        email: item.email,
        phone: item.phone,
        address: item.address,
        note: item.note,
        consume: item.consume,
        id_cart: item.id_cart,
        items: additionalData,
      };
    })
  );

  return res.render("check.ejs", { data: data_1 });
};

const getCustomer = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const [existingCustomer] = await connection.execute(
      `SELECT email FROM Customer WHERE email = ?`,
      [email]
    );

    if (existingCustomer.length > 0) {
      return res.status(409).send("Email already exists");
    }

    const [results] = await connection.execute(
      `INSERT INTO Customer (email, fullname, password) VALUES (?, ?, ?)`,
      [email, name, password]
    );
    const query = `SELECT * FROM Customer WHERE email = ?`;
    const [user] = await connection.execute(query, [email]);
    let [result, fields] = await connection.query(
      `insert into discount(id_Customer, consume, rank) values(?, ?, ?)`,
      [user[0].id, 0, "bronze"]
    );

    res.status(201).send("Customer created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
const gettransport = async (req, res) => {
  const { name, phone, email, province, district, note } = req.body;
  let product = await getSum(id_Customer);
  let [results, fields] = await connection.query(
    `insert into Transport(id_Customer, Name, email, phone, province, district, note, consume) 
  values(?, ?, ?, ?, ?, ?, ?, ?)`,
    [id_Customer, name, phone, email, province, district, note, product[0].sum]
  );

  // tinh tong tien
  const query = `select sum(Cart.price_left * Cart.SmartPhone_Quantity) as sum
  from (select sd.link, sd.price_left, sd.price_right, ca.SmartPhone_Quantity, tmp.name, sd.id, tmp.name_detail
  from Cart as ca, SmartPhone_Detail as sd, SmartPhone as tmp
  where ca.SmartPhone_id = sd.id and ca.color = sd.color and tmp.id = ca.SmartPhone_id and ca.id_Customer = ?) as Cart;`;
  const [user] = await connection.execute(query, [id_Customer]);
  let [results1, fields1] = await connection.query(
    `update discount
  set consume = consume + ?
  where id_Customer = ?;`,
    [user[0].sum, id_Customer]
  );

  let [results2, fields2] = await connection.query(
    `update discount
  set rank = 
  (SELECT 
      CASE
          WHEN consume <= 30000000 THEN "bronze"
          WHEN consume > 30000000 AND consume <= 45000000 THEN "silver"
          WHEN consume > 45000000 AND consume <= 70000000 THEN "gold"
          ELSE "diamond"
      END) 
  where id_Customer = ?;`,
    [id_Customer]
  );

  // update check.ejS
  // chuyen tu cart sang producttransport
  let [results3, filed3] = await connection.query(`select *
    from Transport
    order by created_at desc
    limit 1;`);
  id_cart = results3[0].id_cart;
  let procedureName = `CopyDataFromCartToTransport123_${Date.now()}`;
  let [results4, filed4] = await connection.query(
    `

    CREATE PROCEDURE ${procedureName}()
    BEGIN
      DECLARE done_outer INT DEFAULT FALSE;
      DECLARE done_inner INT DEFAULT FALSE;
      declare done_inner_product INT default False;
      DECLARE id_outer INT;
      declare id_inner int;
      DECLARE quantity1 INT;
      DECLARE color1 NVARCHAR(255);
      DECLARE name_outer NVARCHAR(255);
      declare name_inner nvarchar(255);
      declare id_Customer_outer int;
      declare id_Customer_outer_main int;
      declare link_outer nvarchar(255);
      declare link_inner nvarchar(255);
      declare color_inner nvarchar(255);
      declare id_product int;
      declare id_cart_inner int;
      
      DECLARE cart_cursor CURSOR FOR
        SELECT SmartPhone_id, SmartPhone_Quantity, color, id_Customer data FROM Cart;
        
      DECLARE CONTINUE HANDLER FOR NOT FOUND SET done_outer = TRUE;
    
      set id_Customer_outer_main = ?;
        set id_cart_inner = ?;
      OPEN cart_cursor;
    
      read_outer_loop: LOOP
         FETCH cart_cursor INTO id_outer, quantity1, color1, id_Customer_outer;
       
    
    
         IF done_outer THEN
           LEAVE read_outer_loop;
         END IF;
    
       
    BEGIN
      DECLARE cart_cursor_inner_product CURSOR FOR
        SELECT id, color, link data FROM SmartPhone_Detail;
      DECLARE CONTINUE HANDLER FOR NOT FOUND SET done_inner_product = TRUE;
        OPEN cart_cursor_inner_product;
    
        read_inner_loop_product: LOOP
          FETCH cart_cursor_inner_product INTO id_product, color_inner, link_inner;
    
          IF done_inner_product THEN
            LEAVE read_inner_loop_product;
          END IF;
          
        IF id_product = id_outer and color_inner = color1 then
          set link_outer = link_inner;
                LEAVE read_inner_loop_product;
        end if;
          
        END LOOP;
        CLOSE cart_cursor_inner_product;
    END ;
    BEGIN
      DECLARE cart_cursor_inner CURSOR FOR
        SELECT id, name data FROM SmartPhone;
      DECLARE CONTINUE HANDLER FOR NOT FOUND SET done_inner = TRUE;
        OPEN cart_cursor_inner;
    
        read_inner_loop: LOOP
          FETCH cart_cursor_inner INTO id_inner, name_inner;
    
          IF done_inner THEN
            LEAVE read_inner_loop;
          END IF;
          
        IF id_inner = id_outer then
          set name_outer = name_inner;
                LEAVE read_inner_loop;
        end if;
          
        END LOOP;
        CLOSE cart_cursor_inner;
    END ;
      IF color1 = "black" THEN
           SET color1 = 'màu đen';
      END IF;
        IF color1 = "white" THEN
           SET color1 = 'màu trắng';
      END IF;
      if id_Customer_outer = id_Customer_outer_main then
        INSERT INTO ProductTransport(id_cart, name_product, color, amount, id_Customer, link) VALUES (id_cart_inner, name_outer,color1,quantity1, id_Customer_outer_main, link_outer);	
      end if;
      END LOOP;
      CLOSE cart_cursor;
    END; 
    `,
    [id_Customer, id_cart]
  );
  let callProcedureQuery = `CALL ${procedureName}();`;
  // Assuming id_Customer and id_cart are defined somewhere in your code
  let [results5, fields5] = await connection.query(callProcedureQuery);
  let [results6, fields6] = await connection.query(
    `delete from Cart
where id_Customer = ?;`,
    [id_Customer]
  );
  res.redirect("/");
};
const checkLoginCredentials = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = `SELECT * FROM Customer WHERE email = ?`;
    const [user] = await connection.execute(query, [email]);

    if (user.length === 0) {
      return res.status(401).send("No user found with this email.");
    }

    if (password !== user[0].password) {
      return res.status(401).send("Password is incorrect.");
    }
    id_Customer = user[0].id;
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
const setId_Customer = (req, res) => {
  id_Customer = 0;
  console.log(id_Customer);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getProductDetail,
  getCart1,
  deleteProduct,
  getCartAfter,
  getAddtocart,
  getColor,
  getSellProduct,
  getCustomer,
  checkLoginCredentials,
  gettransport,
  getCheck,
  setId_Customer,
};
