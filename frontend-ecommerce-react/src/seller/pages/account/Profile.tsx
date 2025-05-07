import React from 'react';
import { Box, Typography, Avatar, Divider, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
  const personalDetails = {
    sellerName: 'Raam Virani',
    sellerEmail: 'RaamVirani@gmail.com',
    sellerMobile: '9876567843',
    avatar: 'https://example.com/eagle.jpg', // Replace with actual image URL
  };

  const businessDetails = {
    businessName: 'Virani Clothing',
    gstin: 'GSTIN3447633',
    accountStatus: 'PENDING',
  };

  const pickupAddress = {
    address: 'Mumbai new shivam building',
    city: 'Mumbai',
    state: 'Maharashtra',
    mobile: '8976542931',
  };

  const bankDetails = {
    accountHolderName: 'Raam Virani',
    accountNumber: '67893447633',
    ifscCode: 'YES834',
  };

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" fontSize="1.25rem">
          {title}
        </Typography>
        <IconButton
        // className='text-primary-color'
          size="large"
          sx={{
            // backgroundColor: '#E8F5E9', // Light green background
            backgroundColor: 'primary.main', // Light green background
            '&:hover': { backgroundColor: '#C8E6C9' }, // Darker on hover
            color: '#4caf50',
            width: 36,
            height: 36,
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)', 
          }}
        >
          <EditIcon sx={{ color: 'white', fontSize: '24px' }} />
        </IconButton>
      </Box>
      {children}
    </Box>
  );

  const DetailRow = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Typography
        variant="body2"
        sx={{ width: '140px', color: '#666', fontWeight: 500 }}
      >
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 400 }}>
        {value}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: '800px',
        mx: 'auto',
        background: 'linear-gradient(to bottom, #f5f7fa 0%, #ffffff 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Personal Details */}
      <Section title="Personal Details">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={personalDetails.avatar}
            alt="Seller Avatar"
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <DetailRow label="Seller Name" value={personalDetails.sellerName} />
            <DetailRow label="Seller Email" value={personalDetails.sellerEmail} />
            <DetailRow label="Seller Mobile" value={personalDetails.sellerMobile} />
          </Box>
        </Box>
      </Section>

      <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />

      {/* Business Details */}
      <Section title="Business Details">
        <DetailRow label="Business Name/Brand" value={businessDetails.businessName} />
        <DetailRow label="GSTIN" value={businessDetails.gstin} />
        <DetailRow label="Account Status" value={businessDetails.accountStatus} />
      </Section>

      <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />

      {/* Pickup Address */}
      <Section title="Pickup Address">
        <DetailRow label="Address" value={pickupAddress.address} />
        <DetailRow label="City" value={pickupAddress.city} />
        <DetailRow label="State" value={pickupAddress.state} />
        <DetailRow label="Mobile" value={pickupAddress.mobile} />
      </Section>

      <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />

      {/* Bank Details */}
      <Section title="Bank Details">
        <DetailRow label="Account Holder Name" value={bankDetails.accountHolderName} />
        <DetailRow label="Account Number" value={bankDetails.accountNumber} />
        <DetailRow label="IFSC Code" value={bankDetails.ifscCode} />
      </Section>
    </Box>
  );
};

export default Profile
