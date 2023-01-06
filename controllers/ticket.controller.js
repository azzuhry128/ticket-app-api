const ticket = require("../models/ticket.model");

exports.TicketPost = async (req, res) => {
  const { name, from, to, kids, adults, type, departure, phone } = req.body;

  const ticketData = new ticket({
    name: name,
    from: from,
    to: to,
    kids: kids,
    adults: adults,
    type: type,
    departure: departure,
    phone: phone,
  });

  ticketData.save();

  return res.send({ status: 200 });
};
