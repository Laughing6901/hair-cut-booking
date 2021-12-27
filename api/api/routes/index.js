
const cateRouter = require("./categories");
const blogRouter = require("./blog");
const serviceRouter = require("./service");
const userRouter = require("./users");
const bookingRouter = require("./booking");
const booking_detailRouter = require("./booking_detail");
const commentRouter = require("./comment");
const galleryRouter = require("./gallery");
const voucherRouter = require("./voucher");

function route(app){
    app.use("/categories", cateRouter),
    app.use("/blogs", blogRouter),
    app.use("/service", serviceRouter),
    app.use("/users", userRouter),
    app.use("/bookings", bookingRouter),
    app.use("/booking-details", booking_detailRouter);
    app.use("/comment", commentRouter),
    app.use("/gallery", galleryRouter),
    app.use("/voucher", voucherRouter);
};
module.exports = route;