const express = require('express');
const Stripe = require('stripe');
const app = express();
const stripe = Stripe('sk_test_YOUR_STRIPE_SECRET_KEY'); // Thay bằng Secret Key của bạn từ Stripe

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const { fontId, price } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `Font: ${fontId}`,
                        },
                        unit_amount: price,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'https://your-username.github.io/success.html?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'https://your-username.github.io/cancel.html',
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
