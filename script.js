const stripe = Stripe('pk_test_YOUR_STRIPE_PUBLIC_KEY'); // Thay bằng Public Key của bạn từ Stripe

async function purchaseFont(fontId, price) {
    try {
        // Gọi API backend để tạo session thanh toán
        const response = await fetch('https://your-backend-api.com/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fontId: fontId,
                price: price, // Giá tính bằng cent (500 = $5.00)
            }),
        });

        const session = await response.json();
        // Chuyển hướng đến trang thanh toán của Stripe
        stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
        console.error('Lỗi khi tạo thanh toán:', error);
        alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    }
}
