import os
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://cook-of-converse.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert r.json() == {"message": "Chef Boy Ali API"}


def test_create_booking_minimal(client):
    payload = {"name": "TEST_Min User", "email": "test_min@example.com", "message": "Need a small dinner"}
    r = client.post(f"{BASE_URL}/api/bookings", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and len(data["id"]) > 10
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["message"] == payload["message"]
    assert "created_at" in data


def test_create_booking_full(client):
    payload = {
        "name": "TEST_Full User",
        "email": "test_full@example.com",
        "phone": "210-555-0100",
        "event_date": "2026-06-15",
        "event_type": "Birthday",
        "guest_count": 25,
        "message": "Backyard BBQ for my dad's 60th",
    }
    r = client.post(f"{BASE_URL}/api/bookings", json=payload)
    assert r.status_code == 200, r.text
    d = r.json()
    for k, v in payload.items():
        assert d[k] == v, f"mismatch on {k}"

    # Verify persistence via list
    r2 = client.get(f"{BASE_URL}/api/bookings")
    assert r2.status_code == 200
    items = r2.json()
    assert any(it.get("id") == d["id"] for it in items)
    # No _id leakage
    for it in items:
        assert "_id" not in it


def test_create_booking_missing_name(client):
    r = client.post(f"{BASE_URL}/api/bookings", json={"email": "a@b.com", "message": "hi"})
    assert r.status_code == 422


def test_create_booking_invalid_email(client):
    r = client.post(f"{BASE_URL}/api/bookings", json={"name": "X", "email": "not-an-email", "message": "hi"})
    assert r.status_code == 422


def test_list_bookings(client):
    r = client.get(f"{BASE_URL}/api/bookings")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    for it in items:
        assert "_id" not in it
        assert "id" in it
