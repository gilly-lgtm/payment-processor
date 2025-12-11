# utils.py
from typing import Dict

def validate_payment_data(data: Dict) -> bool:
    """Validate payment data"""
    required_fields = ["amount", "currency", "card_number", "expiration_date", "cvv"]
    for field in required_fields:
        if field not in data:
            return False
    return True

def calculate_total(taxes: float, fees: float, subtotal: float) -> float:
    """Calculate total cost of a transaction"""
    return subtotal + taxes + fees

def format_card_number(card_number: str) -> str:
    """Format a card number as XXXX-XXXX-XXXX-XXXX"""
    return "-".join([card_number[i:i+4] for i in range(0, len(card_number), 4)])

def generate_receipt(transaction_id: str, customer_name: str, amount: float, date: str) -> str:
    """Generate a receipt for a transaction"""
    return (
        "Transaction ID: {}\n"
        "Customer Name: {}\n"
        "Amount: ${:.2f}\n"
        "Date: {}\n"
        "Payment Method: Credit Card\n"
    ).format(transaction_id, customer_name, amount, date)