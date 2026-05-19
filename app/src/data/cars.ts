export interface Car {
  id: number;
  name: string;
  year: number;
  price: number;
  engine: string;
  mileage: string;
  transmission: string;
  horsepower?: string;
  drivetrain?: string;
  features: string[];
  images: string[];
  category: 'SUV' | 'Sedan' | 'Hatchback' | 'Luxury' | 'Pickup' | 'Van' | 'Compact';
  featured: boolean;
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Toyota Corolla Auris',
    year: 2013,
    price: 540000,
    engine: '1500cc Petrol',
    mileage: '88k km',
    transmission: 'Automatic',
    horsepower: '110HP',
    features: [
      'Keyless Entry',
      'Steering Controls',
      'Traction Control',
      'Eco Mode',
      'Auto Start Stop',
      'Multifunction Control Screen',
      'Dual Zone Climate Control',
      'Neat Dark Interior',
      'Two Tone Cloth Trim',
      'Isofix Car Seat',
      'Side Mirror Blinkers',
      'Auto-Retract Side Mirrors',
      'Xenon Headlights',
      'Fog Lights',
      'Reverse Camera',
      'Single Owner Since Import'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104281/5782697491953291131_fqfz7a.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104280/5782697491953291133_yll0jv.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104280/5782697491953291132_byng8m.jpg'
    ],
    category: 'Hatchback',
    featured: true
  },
  {
    id: 2,
    name: 'Nissan X-Trail T31',
    year: 2010,
    price: 500000,
    engine: '2000cc Petrol',
    mileage: '130k km',
    transmission: 'Xtronic CVT',
    horsepower: '141HP',
    features: [
      'Steering Controls',
      'Keyless Entry',
      'Leather Steering Wheel',
      'Traction Control',
      'Optional 4WD',
      'Hill Descent Control',
      'Android Head Unit',
      'Multifunction Control Screen',
      'Automatic Climate Control',
      'Leather Upholstery',
      'Heated Seats',
      'Llumar Tint',
      'Auto Projector Headlights',
      'Fog Lights',
      'Reverse Camera',
      'Alloy Wheels',
      'New Achilles Tyres'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779103040/5787603856433811556_baarui.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779103039/5787603856433811554_nzr9sz.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779103038/5787603856433811555_wfa10c.jpg'
    ],
    category: 'SUV',
    featured: true
  },
  {
    id: 3,
    name: 'Suzuki Swift RS Hybrid',
    year: 2019,
    price: 500000,
    engine: '1240cc Petrol',
    mileage: '93k km',
    transmission: 'Automatic',
    features: [
      '16" Suzuki Sports Rims',
      'Lane Assist',
      'Heated Driver Seat',
      'Double Steering Controls',
      'Paddle Shifters',
      'Cruise Control',
      'Anti-collision',
      'Fog Lights',
      'Arm-rest',
      'Latest Registration',
      'After Market Exhaust'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779103234/5787344766826647160_lyrtyi.jpg'
    ],
    category: 'Hatchback',
    featured: true
  },
  {
    id: 4,
    name: 'Suzuki Swift Sport',
    year: 2019,
    price: 500000,
    engine: '1400cc Petrol Auto Turbo',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      'Alloy Rims',
      'Fog Lights',
      'HID Lights',
      'Keyless Entry and Start',
      'Side Mirror Blinkers',
      'Wind Breakers',
      'Rear Spoiler',
      'Dual Exhaust',
      'Bucket Seats',
      'Reverse Camera',
      'Dual Steering Controls'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779103299/5787344766826647156_ntgjqd.jpg'
    ],
    category: 'Hatchback',
    featured: false
  },
  {
    id: 5,
    name: 'Toyota Noah',
    year: 2020,
    price: 770000,
    engine: '2.0L Petrol Auto',
    mileage: '66k km',
    transmission: 'Automatic',
    features: [
      '8 Seater Capacity',
      'Electric Sliding Door',
      'Push Start',
      'Toyota Safety Sense',
      'Power Doors',
      'Reverse Camera',
      'LED Headlights',
      'Rear AC Vents'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779103674/5787344766826647132_mhtnii.jpg'
    ],
    category: 'Van',
    featured: true
  },
  {
    id: 6,
    name: 'Toyota Noah',
    year: 2020,
    price: 770000,
    engine: '2.0L Petrol Auto',
    mileage: '66k km',
    transmission: 'Automatic',
    features: [
      '8 Seater Capacity',
      'Electric Sliding Door',
      'Push Start',
      'Toyota Safety Sense',
      'Power Doors',
      'Reverse Camera',
      'LED Headlights',
      'Rear AC Vents'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779103752/5787344766826647139_ko1mza.jpg'
    ],
    category: 'Van',
    featured: false
  },
  {
    id: 7,
    name: 'Mercedes C200 W205',
    year: 2016,
    price: 870000,
    engine: '2000cc Turbo Petrol',
    mileage: '75k km',
    transmission: '7 Speed Automatic',
    drivetrain: 'Rear Wheel Drive',
    features: [
      'Multifunctional Steering Wheel',
      'Leather Bucket Seats',
      'Seat Adjustment Control / Powered Mirrors',
      '255/50R17 Wheels',
      'CD/DVD/USB/Bluetooth Radio',
      'Rear View Camera',
      'Parking Sensors',
      'Isofix Child Seat Anchors',
      'Anti Lock Braking System'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779103879/5783054266296635195_qxkrlo.jpg'
    ],
    category: 'Luxury',
    featured: true
  },
  {
    id: 8,
    name: 'Mazda Demio Skyactiv',
    year: 2013,
    price: 740000,
    engine: '1340cc Petrol',
    mileage: '109k km',
    transmission: 'Automatic',
    features: [
      'Steering Controls',
      'Traction Control',
      'iStart Stop',
      'Multifunction Control Screen',
      'Kenwood Sound System',
      'Working Air Con',
      'Neat Dark Interior',
      'Two Tone Cloth Trim',
      'Llumar Tint',
      'Aftermarket Alarm With Anti-theft Immobilizer',
      'Reverse Camera',
      'Auto Projector Headlights',
      'Fog Lights',
      'New Tyres'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104060/5785234563494777230_j5ak0l.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104061/5785339807373397848_e4zsqf.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104062/5785234563494777229_fsa4ji.jpg'
    ],
    category: 'Hatchback',
    featured: false
  },
  {
    id: 9,
    name: 'Mazda CX-60 AWD',
    year: 2023,
    price: 670000,
    engine: '3.3L Inline 6 Turbo Diesel',
    mileage: '51k km',
    transmission: 'Automatic',
    drivetrain: 'i-ACTIV AWD',
    features: [
      'Mild Hybrid Technology',
      'Panoramic Sunroof',
      'BOSE Premium Sound',
      'Heated & Ventilated Leather Seats',
      'Heads-Up Display',
      '360° Camera',
      'Adaptive Cruise Control',
      'Wireless Apple CarPlay & Android Auto',
      'Memory Seats',
      'Blind Spot Monitoring',
      'Lane Keep Assist',
      'Digital Driver Display',
      'Power Tailgate',
      'Front & Rear Parking Sensors',
      'Push Start Smart Entry',
      'Executive Luxury Interior'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104442/5780802466482950253_b16ygi.jpg'
    ],
    category: 'SUV',
    featured: true
  },
  {
    id: 10,
    name: 'Toyota Probox',
    year: 2013,
    price: 370000,
    engine: '1300cc Petrol Auto',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      'Reliable Commercial Vehicle',
      'Fuel Efficient',
      'Spacious Cargo Area',
      'Working Air Con',
      'Ready Documents'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104538/5778140518767333117_kqnqlr.jpg'
    ],
    category: 'Van',
    featured: false
  },
  {
    id: 11,
    name: 'Toyota Voxy ValveMatic',
    year: 2011,
    price: 770000,
    engine: '2000cc ValveMatic Petrol',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    horsepower: '158HP',
    features: [
      'Traction Control',
      'Eco Mode',
      'Android Head Unit',
      'Dual Zone Climate Control',
      'Two Tone Cloth Trim',
      '8 Seats',
      'Rear Air Con',
      'Electric Doors',
      'Side Mirror Blinkers',
      'Auto Projector Headlights',
      'Fog Lights',
      'Llumar Tint',
      'New Tyres',
      'Reverse Camera'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104681/5780445692139606034_vg0pdv.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104680/5780445692139606036_jvb7eq.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104680/5780445692139606035_hn5ooh.jpg'
    ],
    category: 'Van',
    featured: false
  },
  {
    id: 12,
    name: 'Peugeot 3008 ALLURE',
    year: 2019,
    price: 950000,
    engine: '1600cc Turbo Petrol',
    mileage: '29k km',
    transmission: '8 Speed Automatic',
    horsepower: '180HP',
    features: [
      'Adaptive Cruise Control',
      'Multifunction Steering Wheel',
      'Leather & Sport Steering Wheel',
      'Paddle Shifts',
      'Driver Fatigue Detection',
      'Traction Control',
      'Lane Assist',
      'Brake Assist',
      'Autonomous Emergency Braking',
      'Blind Spot Monitoring',
      '360° Camera',
      'Dual Zone Climate Control',
      'Alcantara Half Leather Upholstery',
      'Heated Seats',
      'Electric Tailgate With Foot Sensor',
      'Reverse Camera'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104946/5780797578810167365_lf7ep9.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779104947/5780797578810167363_wxctdr.jpg'
    ],
    category: 'SUV',
    featured: true
  },
  {
    id: 13,
    name: 'Peugeot 5008 CROSSCITY',
    year: 2019,
    price: 950000,
    engine: '1600cc Turbo Petrol',
    mileage: '81k km',
    transmission: 'Automatic',
    horsepower: '165HP',
    features: [
      'Adaptive Cruise Control',
      'Paddle Shifts',
      'Driver Fatigue Detection',
      'Traction Control',
      'Lane Assist',
      'Autonomous Emergency Braking',
      'Blind Spot Monitoring',
      '360° Camera',
      'Alcantara Half Leather Upholstery',
      'Heated Seats',
      '7 Seats',
      'Electric Tailgate With Foot Sensor',
      'Reverse Camera',
      'Dual Chrome Exhaust Tailpipes'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105131/5780846305214140619_vwqgjm.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105128/5780846305214140621_hayzum.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105127/5780846305214140620_johuma.jpg'
    ],
    category: 'SUV',
    featured: true
  },
  {
    id: 14,
    name: 'Nissan X-Trail T31',
    year: 2008,
    price: 540000,
    engine: '2000cc Petrol',
    mileage: '138k km',
    transmission: 'Xtronic CVT',
    horsepower: '141HP',
    features: [
      'Keyless Entry',
      'Traction Control',
      'Optional 4WD',
      'Hill Descent Control',
      'Android Head Unit',
      'Leather Upholstery',
      'Heated Seats',
      'Llumar Tint',
      'Auto Projector Headlights',
      'Fog Lights',
      'Reverse Camera',
      'Alloy Wheels',
      'New Achilles Tyres'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105274/5782636125460565529_x2xjap.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105275/5782636125460565528_lssmrn.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105257/5782636125460565530_mvdvoc.jpg'
    ],
    category: 'SUV',
    featured: false
  },
  {
    id: 15,
    name: 'Honda Vezel Hybrid',
    year: 2019,
    price: 800000,
    engine: '1500cc Petrol',
    mileage: '66k km',
    transmission: '7-Speed Dual Clutch',
    horsepower: '152HP',
    features: [
      'Adaptive Cruise Control',
      'Paddle Shifts',
      'Traction Control',
      'Lane Assist',
      'Anti-Collision Brake Assist',
      'Electric Parking Brake With Auto Hold',
      'Econ & Sport Mode',
      'Multifunction Control Screen',
      'Dual Zone Climate Control',
      'Alcantara Half Leather Upholstery',
      'Heated Seats',
      'HID Headlights',
      'Daytime Running Lights',
      'Fog Lights',
      'Reverse Camera',
      'Alloy Wheels'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105418/5780384325646880607_eqsmd3.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105415/5780384325646880606_krtphm.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105414/5780384325646880605_vohjsy.jpg'
    ],
    category: 'SUV',
    featured: true
  },
  {
    id: 16,
    name: 'Peugeot 508 GT-LINE Station Wagon',
    year: 2019,
    price: 800000,
    engine: '1600cc Turbo Petrol',
    mileage: '99k km',
    transmission: '8 Speed Automatic',
    horsepower: '167HP',
    features: [
      'Intelligent Adaptive Cruise Control',
      'Paddle Shifts',
      'Autonomous Emergency Braking',
      'Blindspot Monitoring',
      'Surround Camera System',
      '3D View',
      'Head Up Display',
      'Driver Mode Selection',
      'Ambient Interior Lighting',
      'Nappa Leather Upholstery',
      'Heated All Seats',
      'Front Massage Seats',
      'Focal Surround Sound System',
      'LED Dynamic Lights',
      'Panoramic Sunroof',
      'Electric Tailgate With Foot Sensor'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105573/5780384325646880601_xc4ufm.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105627/5780384325646880599_ar85if.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105568/5780384325646880600_dt95xe.jpg'
    ],
    category: 'Luxury',
    featured: true
  },
  {
    id: 17,
    name: 'Mercedes Benz B180 Sunroof',
    year: 2019,
    price: 870000,
    engine: '1400cc Turbo Petrol',
    mileage: '80k km',
    transmission: '7 Speed Automatic',
    horsepower: '136HP',
    features: [
      'Distronic Plus',
      '360° Camera',
      'Head-Up Display',
      'Two 10.25-Inch MBUX System',
      'Ambient Interior Lighting',
      'Beige Nappa Leather Upholstery',
      'Electric & Memory Seats',
      'Heated Seats',
      'Panoramic Sunroof',
      'Wood Grain Trim',
      'Dynamic Select',
      'Blind Spot Monitoring',
      'Electric Tailgate',
      'Reverse Camera'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105922/6048587694499106485_ykljdt.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105921/6048587694499106483_h9yan8.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779105920/6048587694499106484_n660rz.jpg'
    ],
    category: 'Luxury',
    featured: true
  },
  {
    id: 18,
    name: 'Mitsubishi RVR Moonroof',
    year: 2010,
    price: 680000,
    engine: '1800cc Petrol',
    mileage: '126k km',
    transmission: '6 Speed Automatic',
    horsepower: '137HP',
    features: [
      'Cruise Control',
      'Paddle Shifts',
      'Traction Control',
      'Auto Start Stop',
      'Android Head Unit',
      'Moonroof',
      'Neat Dark Interior',
      'Two Tone Cloth Trim',
      'Follow Me Home Headlights',
      'Fog Lights',
      'Alloy Wheels',
      'New Tyres',
      'Reverse Camera'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106093/6048602490661440960_r7pacq.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106094/6048602490661440958_ducpqw.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106099/6048602490661440959_yvbe4a.jpg'
    ],
    category: 'SUV',
    featured: false
  },
  {
    id: 19,
    name: 'Subaru Pleo',
    year: 2016,
    price: 450000,
    engine: '650cc',
    mileage: '62k km',
    transmission: 'Automatic',
    features: [
      'Traction Control',
      'Eco Idling',
      'Anti-Collision Brake Assist',
      'Sport Mode',
      'Android Head Unit',
      'Neat Interior',
      'Two Tone Cloth Trim',
      'Auto-Retract Side Mirrors',
      'Alloy Wheels',
      'New Dunlop Tyres',
      'Reverse Camera',
      'Privately Used'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106254/6046501452789780282_vsvfvq.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106249/6046501452789780280_aepvm2.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106245/6046501452789780281_vljstm.jpg'
    ],
    category: 'Compact',
    featured: false
  },
  {
    id: 20,
    name: 'Toyota Corolla Axio',
    year: 2013,
    price: 500000,
    engine: '1500cc Petrol',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    horsepower: '110HP',
    features: [
      'Traction Control',
      'Eco & Sport Mode',
      'Android Head Unit',
      'Multifunction Control Screen',
      'Neat Beige Interior',
      'Side Mirror Blinkers',
      'Auto-Retract Side Mirrors',
      'Alloy Wheels',
      'New Tyres',
      'Reverse Camera'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106369/6046501452789780260_o4f7xo.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106369/6046501452789780259_tbplxn.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106369/6046501452789780258_ybaduu.jpg'
    ],
    category: 'Sedan',
    featured: false
  },
  {
    id: 21,
    name: 'BMW X1 E84 20i SDrive',
    year: 2012,
    price: 1470000,
    engine: '2000cc Twin Power Turbo',
    mileage: '140k km',
    transmission: '8 Speed Steptronic',
    horsepower: '184HP',
    features: [
      'Adaptive Cruise Control',
      'Traction Control',
      'Lane Assist',
      'Dynamic Stability Control',
      'Eco & Sport Mode',
      'Dual Zone Climate Control',
      'iDrive Infotainment System',
      'Leather Upholstery',
      'Heated Seats',
      'Electric & Memory Seats',
      'Wood Trim Finish',
      'Daytime Running Lights',
      'Fog Lights',
      'BMW OEM Alloy Wheels'
    ],
    images: [],
    category: 'SUV',
    featured: true
  },
  {
    id: 22,
    name: 'Porsche Cayenne S',
    year: 2019,
    price: 3500000,
    engine: '2900cc Twin Turbo Petrol',
    mileage: 'Low Mileage',
    transmission: '8 Speed Automatic',
    drivetrain: 'All Wheel Drive',
    features: [
      'Bose Premium Sound System',
      '255/50R19 Wheels',
      '360° Camera',
      'Air Suspension',
      'Full Leather Interior',
      'Heated Seats',
      'LED DRL',
      'Hill Descent Controls',
      'Power Lift & Close Tailgate'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106638/6044153432823762839_fitbsu.jpg'
    ],
    category: 'Luxury',
    featured: true
  },
  {
    id: 23,
    name: 'Peugeot 208',
    year: 2020,
    price: 900000,
    engine: '1200cc Turbo Petrol',
    mileage: '54k km',
    transmission: '8 Speed Auto',
    horsepower: '130HP',
    features: [
      'Semi Leather Interior',
      'Multifunction Steering',
      'Auto Climate Control',
      'Digital Cluster',
      'Apple CarPlay / Android Auto',
      'Full LED Headlights',
      'Ambient Lighting',
      'Parking Sensors',
      'Reverse Camera',
      'Ready Documents'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106762/6041680459374202767_mee3yv.jpg'
    ],
    category: 'Hatchback',
    featured: false
  },
  {
    id: 24,
    name: 'Toyota Hilux Single Cab',
    year: 2013,
    price: 550000,
    engine: '3000cc Diesel Turbo',
    mileage: 'Low Mileage',
    transmission: 'Manual',
    features: [
      'Buy and Drive',
      'Ready Documents',
      'Strong Diesel Engine',
      'Commercial Grade',
      'Reliable Workhorse'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106868/6039486392510909959_z2wbg2.jpg'
    ],
    category: 'Pickup',
    featured: false
  },
  {
    id: 25,
    name: 'Honda Fit Hybrid',
    year: 2013,
    price: 635000,
    engine: '1330cc Hybrid',
    mileage: '123k km',
    transmission: 'Automatic',
    features: [
      'Cruise Control',
      'Eco & Sport Mode',
      'Auto Start Stop',
      'Half Leather Upholstery',
      'Heated Seats',
      'Llumar Tint',
      '15" Alloy Wheels',
      'New Tyres',
      'Reverse Camera'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106964/6037389761275694489_bklmn1.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106964/6037389761275694490_rlvurx.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106961/6037389761275694491_ly3wcv.jpg'
    ],
    category: 'Hatchback',
    featured: false
  },
  {
    id: 26,
    name: 'Toyota Allion T260',
    year: 2012,
    price: 580000,
    engine: '1800cc ValveMatic Petrol',
    mileage: '124k km',
    transmission: 'Automatic',
    horsepower: '140HP',
    features: [
      'Keyless Entry',
      'Eco & Sport Mode',
      'Android Head Unit',
      'Dual Zone Climate Control',
      'Electric & Memory Driver Seat',
      'Wood Trim Finish',
      'Llumar Tint',
      'Auto Projector Headlights',
      'Fog Lights',
      'Alloy Wheels',
      'New Maxxis Tyres'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107112/6039334054315888007_fi9zzq.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107103/6039334054315888008_szq7tg.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107102/6039334054315888006_uxbyuh.jpg'
    ],
    category: 'Sedan',
    featured: false
  },
  {
    id: 27,
    name: 'Subaru Impreza',
    year: 2016,
    price: 530000,
    engine: '1600cc',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      'Reliable AWD System',
      'Clean Interior',
      'Ready Documents',
      'Well Maintained'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107342/6030384605191409049_acnmbq.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107359/6030384605191409047_uis8hu.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107341/6030384605191409048_ezjcsf.jpg'
    ],
    category: 'Sedan',
    featured: false
  },
  {
    id: 28,
    name: 'Toyota Prado J120',
    year: 2008,
    price: 1750000,
    engine: '3700cc Petrol',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      '7 Seater',
      'Full 4WD Capability',
      'Premium Leather Interior',
      'Sunroof',
      'Reverse Camera',
      'Ready Documents',
      'Iconic Off-Roader'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107453/6030630749767142544_rqfddt.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107453/6030630749767142543_jo1bzc.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107453/6030630749767142545_ig0mux.jpg'
    ],
    category: 'SUV',
    featured: true
  },
  {
    id: 29,
    name: 'Range Rover Sport',
    year: 2012,
    price: 1250000,
    engine: '4200cc Petrol',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      'Premium Luxury SUV',
      'Air Suspension',
      'Full Leather Interior',
      'Panoramic Sunroof',
      'Advanced Terrain Response',
      'Premium Sound System',
      'Ready Documents'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107592/6030736242753866869_gpzps2.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107590/6030736242753866868_ztrsok.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107586/6030736242753866871_opmxmi.jpg'
    ],
    category: 'Luxury',
    featured: true
  },
  {
    id: 30,
    name: 'Bentley Bentayga V8',
    year: 2018,
    price: 15000000,
    engine: '4000cc Twin-turbo V8 Diesel',
    mileage: 'Low Mileage',
    transmission: '8 Speed Automatic',
    features: [
      '429 Bhp Output',
      '900Nm Torque',
      'Air Suspension with 4 Height Settings',
      'Mulliner Driving Specification',
      'NAIM Premium Surround Sound',
      'Terrain Response Management',
      'Four Zone Climate Controls',
      'Panoramic Sunroof',
      'Breitling Analog Cabin Clock',
      'Ventilated Heated & Cooled Seats',
      '360° Camera Coverage',
      'Two Tone Beige Leather Interior',
      'Blind Spot Monitoring'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107816/6023960639786651509_d34pbt.jpg'
    ],
    category: 'Luxury',
    featured: true
  },
  {
    id: 31,
    name: 'Toyota Hiace Diesel',
    year: 2019,
    price: 670000,
    engine: '2800cc Diesel',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      'Flexible Rear Seats',
      'Spacious Loading Area',
      'Power Steering',
      'Power Windows',
      'Air Conditioning',
      'Multifunction Steering Wheel',
      'Dual Airbags',
      'ABS Braking System',
      'Sliding Side Door',
      'Strong Suspension',
      'Fuel Efficient Diesel'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779107936/6019229394007690266_grclym.jpg'
    ],
    category: 'Van',
    featured: false
  },
  {
    id: 32,
    name: 'Mazda CX-5 XDL',
    year: 2021,
    price: 870000,
    engine: '2.2L Turbo Diesel',
    mileage: 'Low Mileage',
    transmission: '6-speed Automatic',
    drivetrain: 'AWD',
    features: [
      'Sunroof',
      'Leather Upholstery',
      'Power-adjustable Driver Seat with Memory',
      'Heated Front & Rear Seats',
      'Dual-zone Climate Control',
      '19-inch Alloy Wheels',
      'LED Headlights with Adaptive Lighting',
      'Adaptive Cruise Control',
      'Lane Keep Assist',
      'Blind Spot Monitoring',
      '360° Camera',
      'Smart Brake Support'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108012/6019229394007690253_1_s6jquj.jpg'
    ],
    category: 'SUV',
    featured: true
  },
  {
    id: 33,
    name: 'Ford Ranger Raptor',
    year: 2019,
    price: 3370000,
    engine: '2.2L BiTurbo Diesel',
    mileage: '68k km',
    transmission: 'Automatic',
    features: [
      'Push Start',
      'Reverse Camera with Parking Sensors',
      'Dual Zone Climate Control',
      'Half Leather Seats',
      'Front Power Seats',
      '4WD Selector with Dynamic Driving Modes',
      'LED Day-Time Running Lights',
      'Lane Departure Assist',
      'Paddle Shifters',
      'Raptor Styling Package'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108136/6019229394007690161_mlch33.jpg'
    ],
    category: 'Pickup',
    featured: true
  },
  {
    id: 34,
    name: 'Mazda Demio',
    year: 2013,
    price: 340000,
    engine: '1340cc Petrol',
    mileage: '97k km',
    transmission: 'Automatic',
    features: [
      'Steering Controls',
      'Android Head Unit',
      'Heavy Sound System',
      'Neat Dark Interior',
      'Two Tone Cloth Trim',
      'Llumar Tint',
      'Aftermarket Alarm With Anti-theft Immobilizer',
      'Auto Projector Headlights',
      'New Tyres',
      'Reverse Camera'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108221/6019199247632239683_ivcmjy.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108229/6019199247632239684_yfslnz.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108231/6019199247632239685_ve3eec.jpg'
    ],
    category: 'Hatchback',
    featured: false
  },
  {
    id: 35,
    name: 'Lexus LX570',
    year: 2016,
    price: 2700000,
    engine: '5700cc V8 Petrol',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      '7 Seater',
      'Luxurious Leather Interior',
      'Power Seats',
      'Touchscreen Infotainment',
      '360 Camera',
      'Dual Zone Climate Control',
      'Keyless Entry & Push Start',
      'Premium Sound System',
      'Alloy Wheels',
      'Ready Documents'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108403/6014567640799579248_1_g6ruaq.jpg'
    ],
    category: 'Luxury',
    featured: true
  },
  {
    id: 36,
    name: 'Audi Q7',
    year: 2012,
    price: 2350000,
    engine: '3000cc V6 Diesel',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      '7 Seater',
      'Leather Upholstery',
      'Power Adjustable Front Seats',
      'Heated Seats',
      'Climate Control System',
      'Reverse Camera',
      'Parking Sensors',
      'Power Tailgate',
      'Ready Documents'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108465/6014567640799579232_lq4390.jpg'
    ],
    category: 'Luxury',
    featured: false
  },
  {
    id: 37,
    name: 'Volkswagen Golf TSI',
    year: 2016,
    price: 800000,
    engine: '1400cc Turbo Petrol',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      'Leather Interior',
      'Premium Build Quality',
      'Turbocharged Performance',
      'German Engineering',
      'Ready Documents'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108826/6005789590934981728_fshoyn.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108826/6005789590934981729_xcgerc.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108827/6005789590934981727_c1aomu.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108830/6005789590934981726_qma2q9.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108836/6005789590934981725_kemjnx.jpg'
    ],
    category: 'Hatchback',
    featured: false
  },
  {
    id: 38,
    name: 'Subaru Impreza',
    year: 2013,
    price: 400000,
    engine: '1500cc Petrol',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      'AWD System',
      'Clean Interior',
      'Ready Documents',
      'Reliable Performance'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109052/6005789590934981715_kpljrm.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109051/6005789590934981714_p1s35n.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109047/6005789590934981716_hq8hkf.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109047/6005789590934981717_ae1dkz.jpg'
    ],
    category: 'Sedan',
    featured: false
  },
  {
    id: 39,
    name: 'Suzuki Baleno',
    year: 2018,
    price: 600000,
    engine: '1.2L Petrol',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    drivetrain: 'FWD',
    features: [
      'Touchscreen Infotainment',
      'Bluetooth / USB Connectivity',
      'Reverse Camera',
      'Keyless Entry & Push Start',
      'Automatic Climate Control',
      'Multifunction Steering Wheel',
      'Dual Front Airbags',
      'ABS with EBD',
      'Stability Control'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779112164/5979021181492857922_ybfzoz.jpg'
    ],
    category: 'Hatchback',
    featured: false
  },
  {
    id: 40,
    name: 'Mazda CX-5 Exclusive XDL',
    year: 2019,
    price: 550000,
    engine: '2.2L Turbo Diesel',
    mileage: '83k km',
    transmission: '6-speed Automatic',
    drivetrain: 'FWD',
    features: [
      'Leather Upholstery',
      'Power-adjustable Driver Seat with Memory',
      'Heated Front & Rear Seats',
      'Dual-zone Climate Control',
      '19-inch Alloy Wheels',
      'LED Headlights',
      'Adaptive Cruise Control',
      'Smart Brake Support',
      'Lane Keep Assist',
      'Blind Spot Monitoring',
      '360° Camera',
      'Traction Control'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779112259/5979021181492857918_tblpls.jpg'
    ],
    category: 'SUV',
    featured: false
  },
  {
    id: 41,
    name: 'Toyota RAV4 Adventure',
    year: 2019,
    price: 950000,
    engine: '2000cc',
    mileage: '84k km',
    transmission: 'Automatic',
    features: [
      'TRD Body Kit',
      'Keyless Ignition',
      'Leather Interior',
      'Electric Seats',
      'Heated Seats',
      'Onboard Screen',
      'Steering Wheel Controls',
      'Bluetooth Connectivity',
      'Optional 4WD',
      'Cruise Control',
      'Parking Sensors',
      'Fog Lights',
      'Reverse Camera',
      'Original Alloy Rims',
      'New Tyres All Round'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779112355/5979082105603951955_kxkojt.jpg'
    ],
    category: 'SUV',
    featured: true
  },
  {
    id: 42,
    name: 'Daihatsu Move',
    year: 2015,
    price: 295000,
    engine: '650cc',
    mileage: 'Low Mileage',
    transmission: 'Automatic',
    features: [
      'Accident Free',
      'Original Paint',
      'Fabric Interior',
      'Active Online Taxi Accounts',
      'LPG Gas System',
      'Original Daihatsu Alloy Rims',
      'New Tyres All Round',
      'Lady Owned/Driven'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779112606/5979082105603951954_jbmvlw.jpg'
    ],
    category: 'Compact',
    featured: false
  },
  {
    id: 43,
    name: 'Mazda Premacy',
    year: 2014,
    price: 470000,
    engine: '1990cc Skyactiv Petrol',
    mileage: '122k km',
    transmission: 'Automatic',
    horsepower: '150HP',
    features: [
      'Keyless Entry',
      'Steering Controls',
      'Traction Control',
      'iStart Stop',
      'Multifunction Control Screen',
      '7 Seats',
      'Power Sliding Doors',
      'Auto-Retract Side Mirrors',
      'Xenon Headlights',
      'New Tyres',
      'Reverse Camera'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779111794/5979082105603951987_eze2ug.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779111799/5979082105603951988_fdp3d4.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779111840/5979082105603951986_hnyw25.jpg'
    ],
    category: 'Van',
    featured: false
  },
  {
    id: 44,
    name: 'Mitsubishi RVR 4WD',
    year: 2012,
    price: 670000,
    engine: '1800cc Petrol',
    mileage: 'Low Mileage',
    transmission: '6 Speed Automatic',
    horsepower: '137HP',
    features: [
      'Optional 4WD',
      'Keyless Entry',
      'Paddle Shifts',
      'Traction Control',
      'Auto Start Stop',
      'Android Head Unit',
      'Two Tone Cloth Trim',
      'Side Mirror Blinkers',
      'Xenon Headlights',
      'Follow Me Home Headlights',
      'Fog Lights',
      'Alloy Wheels',
      'New Tyres',
      'Reverse Camera',
      'Mombasa Branch'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779112045/5978530210896350234_at6wnw.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779112064/5978530210896350233_m6vuwi.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779112067/5978530210896350232_tdkbdo.jpg'
    ],
    category: 'SUV',
    featured: false
  },
  {
    id: 45,
    name: 'Volkswagen Tiguan R-LINE',
    year: 2018,
    price: 970000,
    engine: '1400cc Turbo Petrol',
    mileage: '67k km',
    transmission: '7 Speed DSG',
    horsepower: '145HP',
    features: [
      'Adaptive Cruise Control',
      'Paddle Shifts',
      'Lane Assist',
      'Anti-Collision Safety Technology',
      'Blind Spot Monitors',
      '360° Cameras',
      'Dual Zone Climate Control',
      'Alcantara Half Leather Upholstery',
      'Heated Front & Rear Seats',
      'Roof Rails',
      'Dynamic Light Assist',
      'Headlight Washers',
      'Fog Lights',
      'Electric Tailgate',
      '19" Five Spoke Alloy Wheels'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109815/6003740277354466349_z8srpn.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109814/6003740277354466348_rslds3.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109812/6003740277354466350_uryp5d.jpg'
    ],
    category: 'SUV',
    featured: true
  },
  {
    id: 46,
    name: 'Peugeot 208 Allure',
    year: 2013,
    price: 770000,
    engine: '1200cc Turbo Petrol',
    mileage: '124k km',
    transmission: '6 Speed Automatic',
    features: [
      'Adaptive Cruise Control',
      'Traction Control',
      'Autonomous Emergency Braking',
      'Auto Start Stop',
      'Ambient Temperature Display',
      'Multifunction Control Screen',
      'Dual Zone Climate Control',
      'Surround Sound System',
      'HID Headlights',
      'Fog Lights',
      'Reverse Camera',
      'Alloy Wheels'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779110358/5996935318285782030_cnn7kh.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779110359/5996935318285782031_rx7cbw.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779110362/5996935318285782032_mmf87i.jpg'
    ],
    category: 'Hatchback',
    featured: false
  },
  {
    id: 47,
    name: 'Toyota Ist',
    year: 2005,
    price: 300000,
    engine: '1300cc Petrol',
    mileage: '179k km',
    transmission: 'Automatic',
    features: [
      'Android Head Unit',
      'Working Air Con',
      'Neat Dark Interior',
      'Two Tone Cloth Trim',
      'LED Headlights',
      'Alloy Wheels',
      'New Tyres',
      'Original Paint'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779111179/5983223686732910297_zrh18b.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779111178/5983223686732910296_u2etlp.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779111176/5983223686732910298_vadba6.jpg'
    ],
    category: 'Hatchback',
    featured: false
  },
  {
    id: 48,
    name: 'Mitsubishi RVR 4WD',
    year: 2010,
    price: 680000,
    engine: '1800cc Petrol',
    mileage: 'Low Mileage',
    transmission: '6 Speed Automatic',
    features: [
      'Cruise Control',
      'Paddle Shifts',
      'Traction Control',
      'Auto Start Stop',
      'Android Head Unit',
      'Moonroof',
      'Neat Dark Interior',
      'Two Tone Cloth Trim',
      'Follow Me Home Headlights',
      'Fog Lights',
      'Alloy Wheels',
      'New Tyres',
      'Reverse Camera'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106093/6048602490661440960_r7pacq.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106094/6048602490661440958_ducpqw.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779106099/6048602490661440959_yvbe4a.jpg'
    ],
    category: 'SUV',
    featured: false
  },
  {
    id: 49,
    name: 'Nissan X-Trail T31',
    year: 2010,
    price: 500000,
    engine: '2000cc Petrol',
    mileage: '151k km',
    transmission: 'Xtronic CVT',
    horsepower: '141HP',
    features: [
      'Cruise Control',
      'Keyless Entry',
      'Traction Control',
      'Optional 4WD',
      'Hill Descent Control',
      'Dash Cam (Front & Rear)',
      'Android Head Unit',
      'Leather Upholstery',
      'Heated Seats',
      'Llumar Tint',
      'Fog Lights',
      'Reverse Camera',
      'Parking Sensors',
      'Alloy Wheels',
      'New Tyres'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779110698/5992285629640805388_qjxe6t.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779110698/5992285629640805389_de3fjd.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779110695/5992285629640805390_grfons.jpg'
    ],
    category: 'SUV',
    featured: false
  },
  {
    id: 50,
    name: 'Honda Fit Hybrid',
    year: 2013,
    price: 635000,
    engine: '1330cc Hybrid',
    mileage: '120k km',
    transmission: 'Automatic',
    features: [
      'Cruise Control',
      'Eco & Sport Mode',
      'Auto Start Stop',
      'Multifunctional Control Screen',
      'Neat Dark Interior',
      'Two Tone Cloth Trim',
      'Side Mirror Blinkers',
      'Reverse Camera',
      'New Tyres'
    ],
    images: [
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108612/6008041390748666964_nz5jo9.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108612/6008041390748666962_yo2blt.jpg',
      'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779108605/6008041390748666963_izeyxt.jpg'
    ],
    category: 'Hatchback',
    featured: false
  }
];

export const rimProducts = {
  sizes: ['15" rims - 195/65R15'],
  priceRange: 'Ksh 5,000 - Ksh 60,000',
  tireSize: '265/65R17 AT - Ksh 13,000',
  images: [
    'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109191/6005861729205685310_sncjlj.jpg',
    'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109193/6005861729205685309_th1sle.jpg',
    'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109196/6005861729205685308_bwwshv.jpg',
    'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109199/6005861729205685307_qcljdr.jpg',
    'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109202/6005861729205685306_neysqq.jpg',
    'https://res.cloudinary.com/dvvhrx3kb/image/upload/v1779109203/6005861729205685305_jskp8w.jpg'
  ]
};

export const companyInfo = {
  name: 'Keen Auto Works',
  manager: 'Paul Kigen',
  phone: '+254 731 890 647',
  email: 'info@keenautoworks.co.ke',
  headquarters: 'Nairobi, Kenya',
  branches: [
    'Nairobi, Kenya (Headquarters)',
    'Eldoret, Kenya',
    'Arusha, Tanzania'
  ],
  hours: '24/7 Availability',
  refundPolicy: 'Full refund policy if services are poorly done or goods not to full satisfaction',
  negotiation: 'All prices are negotiable - Call to discuss terms of sale',
  services: [
    'Car Sales (New & Used)',
    'Import Services',
    'Vehicle Financing Assistance',
    'Trade-ins Accepted',
    'Rim & Tire Sales',
    'Vehicle Inspection',
    'Documentation Assistance'
  ]
};

export const categories = ['All', 'SUV', 'Sedan', 'Hatchback', 'Luxury', 'Pickup', 'Van', 'Compact'] as const;
