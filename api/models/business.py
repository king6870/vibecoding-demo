from pydantic import BaseModel
from typing import Optional

class Highlight(BaseModel):
    """Business highlight data model"""
    id: str
    title: str
    value: str
    icon: Optional[str] = None

class CTAButton(BaseModel):
    """Call-to-action button data model"""
    label: str
    href: str
    variant: str  # 'primary' or 'secondary'

class BusinessInfo(BaseModel):
    """General business information data model"""
    companyName: str
    tagline: str
    description: str
    highlights: list[Highlight]
