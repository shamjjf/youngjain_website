import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to store contact submissions
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "contacts.json");

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf-8");
  }
}

// Read existing contacts
function readContacts() {
  ensureDataDir();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

// Save contacts
function saveContacts(contacts: unknown[]) {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Create contact entry
    const contact = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    // Save to JSON file
    const contacts = readContacts();
    contacts.push(contact);
    saveContacts(contacts);

    console.log(`✅ New contact submission from ${contact.name} (${contact.email})`);

    return NextResponse.json(
      { success: true, message: "Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// GET — view all submissions (admin use)
export async function GET() {
  try {
    const contacts = readContacts();
    return NextResponse.json({ total: contacts.length, contacts });
  } catch (error) {
    return NextResponse.json({ error: "Could not read contacts." }, { status: 500 });
  }
}
