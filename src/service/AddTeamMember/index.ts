'use server';

// import { cookies } from 'next/headers';




export const getAllMember = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/team-members/members`, {
    method: 'GET',
  });

  if (!res.ok) {
    const errText = await res.text();
    console.log('📛 Server Error:', errText);
    throw new Error('Failed to get team members');
  }

  return res.json();
};
