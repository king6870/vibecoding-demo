from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI(
    title="Business Details API",
    version="1.0.0",
    description="API for managing business information, team members, and contact details"
)

# CORS configuration for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Business Details API",
        "version": "1.0.0",
        "status": "active"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

@app.get("/api/team")
async def get_team_members():
    """Get all team members"""
    # Future: Return team members from database
    return {
        "team_members": [],
        "total": 0
    }

@app.get("/api/contact")
async def get_contact_info():
    """Get contact information"""
    # Future: Return contact information from database
    return {
        "contact_info": {
            "address": {
                "street": "123 Business Street",
                "city": "City",
                "state": "State",
                "zipCode": "12345",
                "country": "United States"
            },
            "phone": "+1 (555) 123-4567",
            "email": "info@business.com",
            "socialMedia": {
                "facebook": "",
                "twitter": "",
                "linkedin": "",
                "instagram": ""
            },
            "businessHours": [
                {"day": "Monday - Friday", "hours": "9:00 AM - 6:00 PM"},
                {"day": "Saturday", "hours": "10:00 AM - 4:00 PM"},
                {"day": "Sunday", "hours": "Closed"}
            ]
        }
    }

@app.get("/api/business")
async def get_business_info():
    """Get general business information"""
    # Future: Return business info from database
    return {
        "companyName": "Your Business Name",
        "tagline": "Your Business Tagline",
        "description": "Business description goes here",
        "highlights": [
            {
                "id": "1",
                "title": "Years Experience",
                "value": "10+",
                "icon": ""
            },
            {
                "id": "2",
                "title": "Happy Clients",
                "value": "500+",
                "icon": ""
            },
            {
                "id": "3",
                "title": "Support Available",
                "value": "24/7",
                "icon": ""
            }
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
