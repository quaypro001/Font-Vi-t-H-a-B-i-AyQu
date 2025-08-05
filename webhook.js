app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, 'YOUR_WEBHOOK_SECRET');
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        // Gửi email chứa link tải font (dùng SendGrid hoặc dịch vụ tương tự)
        console.log(`Thanh toán thành công cho ${session.id}`);
        // Logic gửi email với link tải font
    }

    res.json({ received: true });
});
