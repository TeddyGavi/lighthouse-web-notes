### Responsive design and @media queries

```
/* Smartphones: minimum width of 320px to maximum width of around 420px */
  @media only screen and (min-width: 320px) and (max-width: 420px) {
    /* Write smartphone only styles here */
  }

  /* Another smartphone breakpoint is maximum width of around 420px */
  @media only screen and (max-width: 420px) {
    /* Write smartphone only styles here */
  }

  /* Tablet: minimum width of 768px to maximum width of 1024px */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    /* Write Tablet only CSS here */
  }

  /* Another tablet breakpoint is maximum width of 1024px */
  @media only screen and (max-width: 1024px) {
    /* Write CSS rules that target Tablets screen sizes downwards - including smartphones */
  }

  /* Another tablet breakpoint is minimum width of 768px */
  @media only screen and (min-width: 768px) {
    /* Write CSS rules that target Tablets screen sizes upwards - including desktops */
  }

  /* Laptops / Desktops: minimum width of 1024px */
  @media only screen and (min-width: 1024px) {
    /* Write CSS rules that target Laptop/Desktop screen sizes and beyond */
  }

  /* Laptops / Desktops: minimum width of 960px */
  @media only screen and (min-width: 960px) {
    /* Write CSS rules that target small laptop screen sizes and beyond */
  }
  ```
- the above are some common breakpoints when talking about screen width

- this is a critical piece of code to include in the head 
>``` <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' /> ```

- It overrides the default behavior of mobile devices which normally wouldn't allow for the mobile device to use the mobile layout

- three main take aways
  1. the responsive design and layout
  2. CSS rules for each layout
  3. Media queries for conditionally applying the CSS rules

