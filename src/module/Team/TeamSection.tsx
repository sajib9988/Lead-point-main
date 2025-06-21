'use client';

import { useEffect, useState } from 'react';

import TeamMemberCard from './TeamMemberCard';
import { getAllMember } from '@/service/AddTeamMember';
import { ITeamMember } from '@/type/type';

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<ITeamMember[]>([]);

  useEffect(() => {
    getAllMember()
      .then((res) => {
        setTeamMembers(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-4">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </section>
  );
}
