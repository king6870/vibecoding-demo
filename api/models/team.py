from pydantic import BaseModel, EmailStr
from typing import Optional

class TeamMember(BaseModel):
    """Team member data model"""
    id: str
    name: str
    title: str
    department: str
    bio: str
    photo: Optional[str] = None
    email: Optional[EmailStr] = None
    linkedin: Optional[str] = None

class TeamResponse(BaseModel):
    """Response model for team endpoint"""
    team_members: list[TeamMember]
    total: int
