USE `Store`;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `products`;
TRUNCATE TABLE `sales`;
TRUNCATE TABLE `sales_products`;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO Store.products (name) VALUES
    ("pao doce"),
    ("sonho - creme"),
    ("bisnaguinha");

INSERT INTO Store.sales (date) VALUES
    (NOW()),
    (NOW());

INSERT INTO Store.sales_products (sale_id, product_id, quantity) VALUES
    (1, 1, 5),
    (1, 2, 10),
    (2, 3, 15);
