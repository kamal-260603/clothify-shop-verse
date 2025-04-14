
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, Settings } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/1234567" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">John Doe</h4>
        <p className="text-sm text-muted-foreground">john.doe@example.com</p>
      </div>
      <div className="flex space-x-2">
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Profile;
