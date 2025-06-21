'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { ITeamMember } from '@/type/type';

export default function TeamMemberCard({ member }: { member: ITeamMember }) {
  const { name, role, bio, avatar, socials } = member;
  const initials = name.split(' ').map((n: string) => n[0]).join('').toUpperCase();

  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <CardHeader className="flex flex-col items-center p-6">
        <div className="relative h-24 w-24 mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-spin"></div>
          <Avatar className="absolute inset-1 h-22 w-22">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <CardDescription className="text-primary">{role}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-sm text-muted-foreground mb-4">{bio}</p>
        <div className="flex justify-center space-x-3">
          {socials.map((social, index) => (
            <Link key={index} href={social.url} target="_blank" className="text-muted-foreground hover:text-primary">
              {social.platform}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
