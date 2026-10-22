
-- SQL Sales Data Analysis
-- Project: Sales Analysis

USE sales_analysis;

-- 1. Total Sales
SELECT SUM(quantity * price) AS total_sales
FROM sales;

-- 2. Product-wise Sales
SELECT
    product_name,
    SUM(quantity * price) AS total_sales
FROM sales
GROUP BY product_name
ORDER BY total_sales DESC;

-- 3. Category-wise Sales
SELECT
    category,
    SUM(quantity * price) AS total_sales
FROM sales
GROUP BY category;

-- 4. Region-wise Sales
SELECT
    region,
    SUM(quantity * price) AS total_sales
FROM sales
GROUP BY region
ORDER BY total_sales DESC;

-- 5. Monthly Sales
SELECT
    DATE_FORMAT(sale_date, '%Y-%m') AS sales_month,
    SUM(quantity * price) AS total_sales
FROM sales
GROUP BY DATE_FORMAT(sale_date, '%Y-%m')
ORDER BY sales_month;

-- 6. Top 3 Products
SELECT
    product_name,
    SUM(quantity * price) AS total_sales
FROM sales
GROUP BY product_name
ORDER BY total_sales DESC
LIMIT 3;

-- 7. Sales Summary
SELECT
    COUNT(*) AS total_orders,
    SUM(quantity) AS total_quantity_sold,
    SUM(quantity * price) AS total_sales,
    AVG(quantity * price) AS average_sale_value,
    MIN(price) AS minimum_price,
    MAX(price) AS maximum_price
FROM sales;
