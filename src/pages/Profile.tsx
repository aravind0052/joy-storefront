import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Package, 
  MapPin, 
  CreditCard, 
  Settings, 
  Camera,
  Edit,
  Eye,
  Download,
  Truck
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    dateOfBirth: "1990-01-15",
    gender: "Male",
  });

  const [addresses, setAddresses] = useState([
    {
      id: "1",
      type: "Home",
      name: "John Doe",
      address: "123 Tech Street, Cyber City",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500032",
      phone: "+91 98765 43210",
      isDefault: true,
    },
    {
      id: "2",
      type: "Office",
      name: "John Doe",
      address: "456 Business Park, HITEC City",
      city: "Hyderabad",
      state: "Telangana", 
      pincode: "500081",
      phone: "+91 98765 43210",
      isDefault: false,
    },
  ]);

  // Mock order history
  const orderHistory = [
    {
      id: "ORD-2024-001234",
      date: "28 Sep 2024",
      status: "Confirmed",
      total: 7997,
      items: 2,
      estimatedDelivery: "1-3 Oct 2024",
    },
    {
      id: "ORD-2024-001233",
      date: "25 Sep 2024",
      status: "Delivered",
      total: 2999,
      items: 1,
      deliveredDate: "27 Sep 2024",
    },
    {
      id: "ORD-2024-001232",
      date: "20 Sep 2024",
      status: "Delivered",
      total: 1599,
      items: 1,
      deliveredDate: "23 Sep 2024",
    },
  ];

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-warning text-warning-foreground';
      case 'delivered':
        return 'bg-success text-success-foreground';
      case 'shipped':
        return 'bg-secondary text-secondary-foreground';
      case 'cancelled':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background-soft">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="shadow-soft border-0">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/api/placeholder/150/150" alt="Profile" />
                    <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                      {userProfile.firstName[0]}{userProfile.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute -bottom-1 -right-1 w-8 h-8"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    {userProfile.firstName} {userProfile.lastName}
                  </h1>
                  <p className="text-muted mb-4">{userProfile.email}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="secondary">Premium Member</Badge>
                    <Badge variant="outline">Verified</Badge>
                  </div>
                </div>
                
                <Button
                  variant={isEditing ? "success" : "outline"}
                  onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                >
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Addresses
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={userProfile.firstName}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, firstName: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={userProfile.lastName}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, lastName: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userProfile.email}
                      disabled
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={userProfile.phone}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, phone: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={userProfile.dateOfBirth}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      value={userProfile.gender}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, gender: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{order.id}</h3>
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted mb-1">
                            Order Date: {order.date}
                          </p>
                          <p className="text-sm text-muted mb-1">
                            Items: {order.items} • Total: ₹{order.total.toLocaleString()}
                          </p>
                          {order.status === 'Confirmed' && (
                            <p className="text-sm text-warning">
                              <Truck className="w-4 h-4 inline mr-1" />
                              Estimated Delivery: {order.estimatedDelivery}
                            </p>
                          )}
                          {order.status === 'Delivered' && (
                            <p className="text-sm text-success">
                              Delivered on: {order.deliveredDate}
                            </p>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Invoice
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Saved Addresses</h2>
                <Button variant="hero">
                  Add New Address
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <Card key={address.id} className="shadow-soft border-0">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <Badge variant={address.isDefault ? "default" : "secondary"}>
                            {address.type}
                          </Badge>
                          {address.isDefault && (
                            <Badge variant="outline">Default</Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="font-medium">{address.name}</p>
                        <p className="text-sm text-muted">{address.address}</p>
                        <p className="text-sm text-muted">
                          {address.city}, {address.state} - {address.pincode}
                        </p>
                        <p className="text-sm text-muted">Phone: {address.phone}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted">Receive order updates and promotions via email</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h4 className="font-medium">SMS Notifications</h4>
                        <p className="text-sm text-muted">Receive order updates via SMS</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-muted">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-destructive">Danger Zone</h4>
                    <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                      <h5 className="font-medium mb-2">Delete Account</h5>
                      <p className="text-sm text-muted mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;