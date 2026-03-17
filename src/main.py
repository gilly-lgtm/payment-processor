import logging
from payment_processor.config import Config
from payment_processor.payment_gateway import PaymentGateway
from payment_processor.payment_processor import PaymentProcessor

def main():
    # Set up logging
    logging.basicConfig(level=logging.INFO)

    # Load configuration
    config = Config()

    # Create payment gateway
    payment_gateway = PaymentGateway(config)

    # Create payment processor
    payment_processor = PaymentProcessor(payment_gateway)

    # Process payments
    payment_processor.process_payments()

if __name__ == "__main__":
    main()