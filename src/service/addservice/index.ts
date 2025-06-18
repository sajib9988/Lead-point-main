'use server'

// ✅ Get All Services
export const getAllServices = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service/all-services`, {
    method: 'GET',
    next: {
      tags: ['services'],
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    console.log("📛 Server Error:", errText);
    throw new Error('Failed to fetch services');
  }

  const data = await res.json();
  console.log("✅ All Services Response:", data); // 🔍 Logging response
  return data;
}

// ✅ Get Service by ID
export const getServiceById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service/get-service/${id}`, {
    method: 'GET',
  });

  if (!res.ok) {
    const errText = await res.text();
    console.log("📛 Server Error:", errText);
    throw new Error('Failed to fetch service');
  }

  const data = await res.json();
  console.log(`✅ Service (${id}) Response:`, data); // 🔍 Logging response
  return data;
}
