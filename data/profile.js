export const sidebarData = [
  {
    heading: "My Account",
    links: [
      
      {
        name: "Addresses",
        link: "/profile/address",
      },
      {
        name: "My Payment Options",
        link: "/profile/payment",
      },
      {
        name: "Account Security",
        link: "/profile/security",
      },
    ],
  },
  {
    heading: "My Orders",
    links: [
      {
        name: "All Orders",
        link: "/profile/orders",
        filter: "",
      },
      {
        name: "Paid Orders",
        link: "/profile/orders",
        filter: "paid",
      },
      {
        name: "Unpaid Orders",
        link: "/profile/orders",
        filter: "unpaid",
      },

      {
        name: "Processing Orders",
        link: "/profile/orders",
        filter: "Processing",
      },
      {
        name: "Unprocessed Orders",
        link: "/profile/orders",
        filter: "Not Processed",
      },
      {
        name: "Dispatched Orders",
        link: "/profile/orders",
        filter: "Dispatched",
      },
      {
        name: "Delievered Orders",
        link: "/profile/orders",
        filter: "Completed",
      },
      {
        name: "Cancelled Orders",
        link: "/profile/orders",
        filter: "Cancelled",
      },
    ],
  },
  {
    heading: "Sign out",
    link: [],
  },
];

export const ordersLinks = [
  {
    name: "All Orders",
    filter: "",
  },
  {
    name: "Paid Orders",
    filter: "paid",
  },
  {
    name: "Unpaid Orders",
    filter: "unpaid",
  },
  {
    name: "Processing Orders",
    filter: "Processing",
  },
  {
    name: "Unprocessed Orders",
    filter: "Not Processed",
  },
  {
    name: "Dispatched Orders",
    filter: "Dispatched",
  },
  {
    name: "Delievered Orders",
    filter: "Delievered",
  },
  {
    name: "Cancelled Orders",
    filter: "Cancelled",
  },
];
