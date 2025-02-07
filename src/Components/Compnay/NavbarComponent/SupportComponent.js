import React, { useState } from "react";
import { Card, ListGroup, Button, Form, Badge, Accordion } from "react-bootstrap";

const SupportComponent = () => {
  const [tickets, setTickets] = useState([
    { id: 1, issue: "Delayed Order", status: "Open", response: "Investigating the issue." },
    { id: 2, issue: "Incorrect Billing", status: "Resolved", response: "Issue has been corrected." },
  ]);
  const [newTicket, setNewTicket] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleNewTicket = () => {
    if (newTicket) {
      setTickets([...tickets, { id: tickets.length + 1, issue: newTicket, status: "Open", response: "Pending response." }]);
      setNewTicket("");
    }
  };

  return (
    <Card className="p-3 shadow-lg mt-4 container" style={{ maxWidth: "700px" }}>
      <h4 className="mb-3 text-center">Support & Help Center</h4>
      <h5>Ticketing System</h5>
      <ListGroup>
        {tickets.map((ticket) => (
          <ListGroup.Item key={ticket.id}>
            <strong>{ticket.issue}</strong> <Badge bg={ticket.status === "Resolved" ? "success" : "warning"}>{ticket.status}</Badge>
            <p className="mt-1"><strong>Response:</strong> {ticket.response}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form className="mt-3">
        <Form.Control
          type="text"
          placeholder="Describe your issue..."
          value={newTicket}
          onChange={(e) => setNewTicket(e.target.value)}
        />
        <Button variant="primary" size="sm" className="mt-2" onClick={handleNewTicket}>
          Submit Ticket
        </Button>
      </Form>
      
      <h5 className="mt-4">FAQs & Knowledge Base</h5>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I track my order?</Accordion.Header>
          <Accordion.Body>Go to the orders section and check the status of your order.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I request a refund?</Accordion.Header>
          <Accordion.Body>Contact support with your order ID to initiate a refund request.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      <h5 className="mt-4">Support Channels</h5>
      <p>Email: support@epackmart.com</p>
      <p>Phone: +1-800-123-4567</p>
      <p>Live Chat: Available 24/7</p>
      
      <h5 className="mt-4">Feedback on Support</h5>
      <Form>
        <Form.Control
          type="text"
          placeholder="Share your experience..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button variant="success" size="sm" className="mt-2">
          Submit Feedback
        </Button>
      </Form>
    </Card>
  );
};

export default SupportComponent;
