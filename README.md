## API

### Get Single Product

**Endpoint:** `/products/:id`

**Method:** `GET`

## Get Products by Tag or Age

**Endpoint:** `/products/tagOrAge`

**Method:** `GET`

**Query Parameters:**

- `tagOrAge`: Specifies the tag or age of the products to retrieve. Possible values are `Popular` or `New`.

**Examples:**

- `/products/tagOrAge?tagOrAge=Popular`
- `/products/tagOrAge?tagOrAge=New`

## Get Products by Search

**Endpoint:** `/products/search`

**Method:** `GET`

**Query Parameters:**

- `name`: The name of the product (e.g., `Green Villa`).
- `location`: The location of the product (e.g., `Dhaka`).
- `propertyType`: The type of property (e.g., `Villa`).
- `budget`: The budget for the product (e.g., `180`).

**Example:**

- `/products/search?name=Green%20Villa&location=Dhaka&propertyType=Villa&budget=180`
