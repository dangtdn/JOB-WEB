export const reviews = [
  {
    _id: {
      $oid: "6225edf9f64cc26819ca48bb",
    },
    user: {
      $oid: "62259a3042a1c4fd1ee5ac58",
    },
    status: {
      isApproved: false,
    },
    ratingNumber: 987,
    review: "quo similique sit",
    jobItem: {
      $oid: "6225ede7f64cc26819ca48b8",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6232410f2b674a4761d4a028",
    },
    user: {
      $oid: "6230e1ee604699b80d342b7b",
    },
    status: {
      isPublished: true,
      isApproved: false,
      isActive: true,
    },
    ratingNumber: 666,
    review: "quis recusandae eos",
    jobItem: {
      $oid: "6220b907da982b12765db94f",
    },
    __v: 0,
  },
];
