from pydantic import BaseModel, EmailStr
from typing import Optional

class Address(BaseModel):
    """Address data model"""
    street: str
    city: str
    state: str
    zipCode: str
    country: str

class SocialMediaLinks(BaseModel):
    """Social media links data model"""
    facebook: Optional[str] = None
    twitter: Optional[str] = None
    linkedin: Optional[str] = None
    instagram: Optional[str] = None

class BusinessHours(BaseModel):
    """Business hours data model"""
    day: str
    hours: str

class ContactInfo(BaseModel):
    """Contact information data model"""
    address: Address
    phone: str
    email: EmailStr
    socialMedia: SocialMediaLinks
    businessHours: list[BusinessHours]

class ContactFormData(BaseModel):
    """Contact form submission data model"""
    name: str
    email: EmailStr
    subject: str
    message: str
