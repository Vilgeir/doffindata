const structure = [
  {
    code: '14000000',
    name: 'Mining, basic metals and related products',
    countWithChildren: 10,
    children: [
      {
        code: '14200000',
        name: 'Sand and clay',
        countWithChildren: 7,
        children: [
          {
            code: '14210000',
            name: 'Gravel, sand, crushed stone and aggregates',
            countWithoutChildren: 5,
            countWithChildren: 7,
            children: [
              {
                code: '14212000',
                name:
                  'Granules, chippings, stone powder, pebbles, gravel, broken and crushed stone, stone mixtures, sand-gravel mixtures and other aggregates',
                countWithChildren: 1,
                children: [
                  {
                    code: '14212300',
                    name: 'Broken and crushed stone',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '14213000',
                name: 'Macadam, tarmac and tar sands',
                countWithChildren: 1,
                children: [
                  {
                    code: '14213200',
                    name: 'Tarmac',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '14500000',
        name: 'Related mining and quarrying products',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
      {
        code: '14600000',
        name: 'Metal ores and alloys',
        countWithChildren: 2,
        children: [
          {
            code: '14620000',
            name: 'Alloys',
            countWithChildren: 2,
            children: [
              {
                code: '14622000',
                name: 'Steel',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '15000000',
    name: 'Food, beverages, tobacco and related products',
    countWithoutChildren: 8,
    countWithChildren: 19,
    children: [
      {
        code: '15100000',
        name: 'Animal products, meat and meat products',
        countWithoutChildren: 2,
        countWithChildren: 3,
        children: [
          {
            code: '15130000',
            name: 'Meat products',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '15500000',
        name: 'Dairy products',
        countWithoutChildren: 4,
        countWithChildren: 4,
        children: [],
      },
      {
        code: '15700000',
        name: 'Animal feedstuffs',
        countWithChildren: 1,
        children: [
          {
            code: '15710000',
            name: 'Prepared animal feeds for farm and other animals',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '15800000',
        name: 'Miscellaneous food products',
        countWithoutChildren: 1,
        countWithChildren: 3,
        children: [
          {
            code: '15810000',
            name: 'Bread products, fresh pastry goods and cakes',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '15890000',
            name: 'Miscellaneous food products and dried goods',
            countWithChildren: 1,
            children: [
              {
                code: '15893000',
                name: 'Dry goods',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '16000000',
    name: 'Agricultural machinery',
    countWithChildren: 2,
    children: [
      {
        code: '16300000',
        name: 'Harvesting machinery',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
      {
        code: '16600000',
        name: 'Specialist agricultural or forestry machinery',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
    ],
  },
  {
    code: '18000000',
    name: 'Clothing, footwear, luggage articles and accessories',
    countWithoutChildren: 1,
    countWithChildren: 10,
    children: [
      {
        code: '18100000',
        name: 'Occupational clothing, special workwear and accessories',
        countWithoutChildren: 3,
        countWithChildren: 6,
        children: [
          {
            code: '18110000',
            name: 'Occupational clothing',
            countWithoutChildren: 3,
            countWithChildren: 3,
            children: [],
          },
        ],
      },
      {
        code: '18500000',
        name: 'Jewellery, watches and related articles',
        countWithChildren: 1,
        children: [
          {
            code: '18530000',
            name: 'Presents and rewards',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '18900000',
        name: 'Luggage, saddlery, sacks and bags',
        countWithChildren: 2,
        children: [
          {
            code: '18930000',
            name: 'Sacks and bags',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '18937000',
                name: 'Goods-packing sacks',
                countWithChildren: 1,
                children: [
                  {
                    code: '18937100',
                    name: 'Goods-packing bags',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '19000000',
    name: 'Leather and textile fabrics, plastic and rubber materials',
    countWithChildren: 1,
    children: [
      {
        code: '19600000',
        name: 'Leather, textile, rubber and plastic waste',
        countWithChildren: 1,
        children: [
          {
            code: '19640000',
            name: 'Polythene waste and refuse sacks and bags',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: '22000000',
    name: 'Printed matter and related products',
    countWithoutChildren: 3,
    countWithChildren: 11,
    children: [
      {
        code: '22100000',
        name: 'Printed books, brochures and leaflets',
        countWithoutChildren: 1,
        countWithChildren: 7,
        children: [
          {
            code: '22110000',
            name: 'Printed books',
            countWithoutChildren: 2,
            countWithChildren: 6,
            children: [
              {
                code: '22112000',
                name: 'Textbooks',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
              {
                code: '22113000',
                name: 'Library books',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '22400000',
        name:
          'Stamps, cheque forms, banknotes, stock certificates, trade advertising material, catalogues and manuals',
        countWithChildren: 1,
        children: [
          {
            code: '22460000',
            name:
              'Trade-advertising material, commercial catalogues and manuals',
            countWithChildren: 1,
            children: [
              {
                code: '22462000',
                name: 'Advertising material',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '24000000',
    name: 'Chemical products',
    countWithChildren: 5,
    children: [
      {
        code: '24100000',
        name: 'Gases',
        countWithoutChildren: 3,
        countWithChildren: 4,
        children: [
          {
            code: '24110000',
            name: 'Industrial gases',
            countWithChildren: 1,
            children: [
              {
                code: '24112000',
                name: 'Inorganic oxygen compounds',
                countWithChildren: 1,
                children: [
                  {
                    code: '24112100',
                    name: 'Carbon dioxide',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '24300000',
        name: 'Basic inorganic and organic chemicals',
        countWithChildren: 1,
        children: [
          {
            code: '24320000',
            name: 'Basic organic chemicals',
            countWithChildren: 1,
            children: [
              {
                code: '24327000',
                name: 'Miscellaneous organic chemicals',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '30000000',
    name:
      'Office and computing machinery, equipment and supplies except furniture and software packages',
    countWithoutChildren: 3,
    countWithChildren: 25,
    children: [
      {
        code: '30100000',
        name:
          'Office machinery, equipment and supplies except computers, printers and furniture',
        countWithChildren: 11,
        children: [
          {
            code: '30190000',
            name: 'Various office equipment and supplies',
            countWithoutChildren: 5,
            countWithChildren: 11,
            children: [
              {
                code: '30191000',
                name: 'Office equipment except furniture',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '30192000',
                name: 'Office supplies',
                countWithoutChildren: 4,
                countWithChildren: 4,
                children: [],
              },
              {
                code: '30195000',
                name: 'Boards',
                countWithChildren: 1,
                children: [
                  {
                    code: '30195200',
                    name: 'Electronic copyboards or accessories',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '30200000',
        name: 'Computer equipment and supplies',
        countWithoutChildren: 3,
        countWithChildren: 11,
        children: [
          {
            code: '30210000',
            name: 'Data-processing machines (hardware)',
            countWithChildren: 5,
            children: [
              {
                code: '30213000',
                name: 'Personal computers',
                countWithoutChildren: 5,
                countWithChildren: 5,
                children: [],
              },
            ],
          },
          {
            code: '30230000',
            name: 'Computer-related equipment',
            countWithChildren: 3,
            children: [
              {
                code: '30232000',
                name: 'Peripheral equipment',
                countWithChildren: 1,
                children: [
                  {
                    code: '30232100',
                    name: 'Printers and plotters',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '30232110',
                        name: 'Laser printers',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '30234000',
                name: 'Storage media',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '30238000',
                name: 'Library automation equipment',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '31000000',
    name:
      'Electrical machinery, apparatus, equipment and consumables; lighting',
    countWithChildren: 9,
    children: [
      {
        code: '31300000',
        name: 'Insulated wire and cable',
        countWithChildren: 1,
        children: [
          {
            code: '31330000',
            name: 'Coaxial cable',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '31500000',
        name: 'Lighting equipment and electric lamps',
        countWithoutChildren: 2,
        countWithChildren: 3,
        children: [
          {
            code: '31510000',
            name: 'Electric filament lamps',
            countWithChildren: 1,
            children: [
              {
                code: '31518000',
                name: 'Signalling lights',
                countWithChildren: 1,
                children: [
                  {
                    code: '31518100',
                    name: 'Floodlights',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '31600000',
        name: 'Electrical equipment and apparatus',
        countWithChildren: 1,
        children: [
          {
            code: '31620000',
            name: 'Sound or visual signalling apparatus',
            countWithChildren: 1,
            children: [
              {
                code: '31625000',
                name: 'Burglar and fire alarms',
                countWithChildren: 1,
                children: [
                  {
                    code: '31625300',
                    name: 'Burglar-alarm systems',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '31700000',
        name: 'Electronic, electromechanical and electrotechnical supplies',
        countWithChildren: 4,
        children: [
          {
            code: '31710000',
            name: 'Electronic equipment',
            countWithoutChildren: 3,
            countWithChildren: 4,
            children: [
              {
                code: '31711000',
                name: 'Electronic supplies',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '32000000',
    name:
      'Radio, television, communication, telecommunication and related equipment',
    countWithoutChildren: 2,
    countWithChildren: 16,
    children: [
      {
        code: '32300000',
        name:
          'Television and radio receivers, and sound or video recording or reproducing apparatus',
        countWithChildren: 5,
        children: [
          {
            code: '32320000',
            name: 'Television and audio-visual equipment',
            countWithChildren: 4,
            children: [
              {
                code: '32321000',
                name: 'Television projection equipment',
                countWithChildren: 2,
                children: [
                  {
                    code: '32321200',
                    name: 'Audio-visual equipment',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '32323000',
                name: 'Video monitors',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '32323500',
                    name: 'Video-surveillance system',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '32340000',
            name: 'Microphones and loudspeakers',
            countWithChildren: 1,
            children: [
              {
                code: '32342000',
                name: 'Loudspeakers',
                countWithChildren: 1,
                children: [
                  {
                    code: '32342100',
                    name: 'Headphones',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '32400000',
        name: 'Networks',
        countWithoutChildren: 2,
        countWithChildren: 7,
        children: [
          {
            code: '32410000',
            name: 'Local area network',
            countWithChildren: 1,
            children: [
              {
                code: '32413000',
                name: 'Integrated network',
                countWithChildren: 1,
                children: [
                  {
                    code: '32413100',
                    name: 'Network routers',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '32420000',
            name: 'Network equipment',
            countWithoutChildren: 3,
            countWithChildren: 4,
            children: [
              {
                code: '32424000',
                name: 'Network infrastructure',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '32500000',
        name: 'Telecommunications equipment and supplies',
        countWithChildren: 2,
        children: [
          {
            code: '32560000',
            name: 'Fibre-optic materials',
            countWithChildren: 1,
            children: [
              {
                code: '32561000',
                name: 'Fibre-optic connections',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '32580000',
            name: 'Data equipment',
            countWithChildren: 1,
            children: [
              {
                code: '32581000',
                name: 'Data-communications equipment',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '33000000',
    name: 'Medical equipments, pharmaceuticals and personal care products',
    countWithoutChildren: 5,
    countWithChildren: 96,
    children: [
      {
        code: '33100000',
        name: 'Medical equipments',
        countWithoutChildren: 18,
        countWithChildren: 66,
        children: [
          {
            code: '33110000',
            name: 'Imaging equipment for medical, dental and veterinary use',
            countWithoutChildren: 1,
            countWithChildren: 6,
            children: [
              {
                code: '33111000',
                name: 'X-ray devices',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
              {
                code: '33112000',
                name: 'Echo, ultrasound and doppler imaging equipment',
                countWithChildren: 1,
                children: [
                  {
                    code: '33112200',
                    name: 'Ultrasonic unit',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '33113000',
                name: 'Magnetic resonance imaging equipment',
                countWithChildren: 1,
                children: [
                  {
                    code: '33113100',
                    name: 'Magnetic resonance scanners',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '33115000',
                name: 'Tomography devices',
                countWithChildren: 1,
                children: [
                  {
                    code: '33115100',
                    name: 'CT scanners',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '33120000',
            name: 'Recording systems and exploration devices',
            countWithChildren: 1,
            children: [
              {
                code: '33122000',
                name: 'Ophthalmology equipment',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '33130000',
            name: 'Dental and subspecialty instruments and devices',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
          {
            code: '33140000',
            name: 'Medical consumables',
            countWithoutChildren: 16,
            countWithChildren: 17,
            children: [
              {
                code: '33141000',
                name:
                  'Disposable non-chemical medical consumables and haematological consumables',
                countWithChildren: 1,
                children: [
                  {
                    code: '33141600',
                    name: 'Collector and collection bags, drainage and kits',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33141620',
                        name: 'Medical kits',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            code: '33160000',
            name: 'Operating techniques',
            countWithoutChildren: 1,
            countWithChildren: 6,
            children: [
              {
                code: '33162000',
                name: 'Operating theatre devices and instruments',
                countWithChildren: 2,
                children: [
                  {
                    code: '33162100',
                    name: 'Operating-theatre devices',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '33162200',
                    name: 'Operating-theatre instruments',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '33164000',
                name: 'Coelioscopy devices',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '33169000',
                name: 'Surgical instruments',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '33169100',
                    name: 'Surgical laser',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '33170000',
            name: 'Anaesthesia and resuscitation',
            countWithChildren: 2,
            children: [
              {
                code: '33172000',
                name: 'Anaesthesia and resuscitation devices',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '33180000',
            name: 'Functional support',
            countWithChildren: 5,
            children: [
              {
                code: '33182000',
                name: 'Cardiac support devices',
                countWithChildren: 2,
                children: [
                  {
                    code: '33182300',
                    name: 'Cardiac surgery devices',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '33183000',
                name: 'Orthopaedic support devices',
                countWithChildren: 1,
                children: [
                  {
                    code: '33183200',
                    name: 'Orthopaedic prostheses',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '33184000',
                name: 'Artificial parts of the body',
                countWithChildren: 2,
                children: [
                  {
                    code: '33184100',
                    name: 'Surgical implants',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '33190000',
            name: 'Miscellaneous medical devices and products',
            countWithChildren: 9,
            children: [
              {
                code: '33191000',
                name: 'Sterilisation, disinfection and hygiene devices',
                countWithoutChildren: 1,
                countWithChildren: 3,
                children: [
                  {
                    code: '33191100',
                    name: 'Steriliser',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '33191110',
                        name: 'Autoclaves',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '33192000',
                name: 'Medical furniture',
                countWithChildren: 1,
                children: [
                  {
                    code: '33192100',
                    name: 'Beds for medical use',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33192130',
                        name: 'Motorised beds',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '33196000',
                name: 'Medical aids',
                countWithoutChildren: 1,
                countWithChildren: 5,
                children: [
                  {
                    code: '33196200',
                    name: 'Devices for the disabled',
                    countWithoutChildren: 4,
                    countWithChildren: 4,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '33600000',
        name: 'Pharmaceutical products',
        countWithoutChildren: 14,
        countWithChildren: 20,
        children: [
          {
            code: '33660000',
            name:
              'Medicinal products for the nervous system and sensory organs',
            countWithChildren: 1,
            children: [
              {
                code: '33662000',
                name: 'Medicinal products for sensory organs',
                countWithChildren: 1,
                children: [
                  {
                    code: '33662100',
                    name: 'Ophthalmologicals',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '33690000',
            name: 'Various medicinal products',
            countWithChildren: 5,
            children: [
              {
                code: '33694000',
                name: 'Diagnostic agents',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
              {
                code: '33696000',
                name: 'Reagents and contrast media',
                countWithChildren: 2,
                children: [
                  {
                    code: '33696500',
                    name: 'Laboratory reagents',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '33698000',
                name: 'Clinical products',
                countWithChildren: 1,
                children: [
                  {
                    code: '33698100',
                    name: 'Microbiological cultures',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '33700000',
        name: 'Personal care products',
        countWithChildren: 5,
        children: [
          {
            code: '33750000',
            name: 'Baby care products',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '33760000',
            name: 'Toilet paper, handkerchiefs, hand towels and serviettes',
            countWithoutChildren: 4,
            countWithChildren: 4,
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: '34000000',
    name: 'Transport equipment and auxiliary products to transportation',
    countWithoutChildren: 1,
    countWithChildren: 64,
    children: [
      {
        code: '34100000',
        name: 'Motor vehicles',
        countWithoutChildren: 8,
        countWithChildren: 50,
        children: [
          {
            code: '34110000',
            name: 'Passenger cars',
            countWithoutChildren: 1,
            countWithChildren: 5,
            children: [
              {
                code: '34111000',
                name: 'Estate and saloon cars',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '34114000',
                name: 'Specialist vehicles',
                countWithoutChildren: 2,
                countWithChildren: 3,
                children: [
                  {
                    code: '34114400',
                    name: 'Minibuses',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '34130000',
            name: 'Motor vehicles for the transport of goods',
            countWithoutChildren: 1,
            countWithChildren: 3,
            children: [
              {
                code: '34133000',
                name: 'Articulated trucks',
                countWithChildren: 1,
                children: [
                  {
                    code: '34133100',
                    name: 'Tankers',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '34134000',
                name: 'Flatbed and Tipper trucks',
                countWithChildren: 1,
                children: [
                  {
                    code: '34134200',
                    name: 'Tipper trucks',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '34140000',
            name: 'Heavy-duty motor vehicles',
            countWithoutChildren: 1,
            countWithChildren: 34,
            children: [
              {
                code: '34142000',
                name: 'Crane and dumper trucks',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '34143000',
                name: 'Winter-maintenance vehicles',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '34144000',
                name: 'Special-purpose motor vehicles',
                countWithoutChildren: 1,
                countWithChildren: 31,
                children: [
                  {
                    code: '34144200',
                    name: 'Vehicles for the emergency services',
                    countWithoutChildren: 2,
                    countWithChildren: 16,
                    children: [
                      {
                        code: '34144210',
                        name: 'Firefighting vehicles',
                        countWithoutChildren: 5,
                        countWithChildren: 14,
                        children: [
                          {
                            code: '34144212',
                            name: 'Water-tender vehicles',
                            count: 3,
                          },
                          { code: '34144213', name: 'Fire engines', count: 6 },
                        ],
                      },
                    ],
                  },
                  {
                    code: '34144400',
                    name: 'Road-maintenance vehicles',
                    countWithoutChildren: 2,
                    countWithChildren: 3,
                    children: [
                      {
                        code: '34144430',
                        name: 'Road-sweeping vehicles',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '34144500',
                    name: 'Vehicles for refuse and sewage',
                    countWithChildren: 6,
                    children: [
                      {
                        code: '34144510',
                        name: 'Vehicles for refuse',
                        countWithoutChildren: 1,
                        countWithChildren: 6,
                        children: [
                          {
                            code: '34144512',
                            name: 'Refuse-compaction vehicles',
                            count: 5,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    code: '34144700',
                    name: 'Utility vehicles',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '34144710',
                        name: 'Wheeled loaders',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '34144900',
                    name: 'Electric vehicles',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '34300000',
        name: 'Parts and accessories for vehicles and their engines',
        countWithChildren: 2,
        children: [
          {
            code: '34350000',
            name: 'Tyres for heavy/light-duty vehicles',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
        ],
      },
      {
        code: '34500000',
        name: 'Ships and boats',
        countWithChildren: 3,
        children: [
          {
            code: '34510000',
            name: 'Ships',
            countWithChildren: 1,
            children: [
              {
                code: '34515000',
                name: 'Floating structures',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '34520000',
            name: 'Boats',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
        ],
      },
      {
        code: '34900000',
        name: 'Miscellaneous transport equipment and spare parts',
        countWithChildren: 8,
        children: [
          {
            code: '34920000',
            name: 'Road equipment',
            countWithChildren: 6,
            children: [
              {
                code: '34927000',
                name: 'Toll equipment',
                countWithChildren: 2,
                children: [
                  {
                    code: '34927100',
                    name: 'Road salt',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '34928000',
                name: 'Road furniture',
                countWithChildren: 4,
                children: [
                  {
                    code: '34928400',
                    name: 'Urban furniture',
                    countWithChildren: 4,
                    children: [
                      {
                        code: '34928470',
                        name: 'Signage',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '34928480',
                        name: 'Waste and rubbish containers and bins',
                        countWithoutChildren: 3,
                        countWithChildren: 3,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            code: '34990000',
            name: 'Control, safety, signalling and light equipment',
            countWithChildren: 2,
            children: [
              {
                code: '34992000',
                name: 'Signs and illuminated signs',
                countWithChildren: 1,
                children: [
                  {
                    code: '34992200',
                    name: 'Road signs',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '34994000',
                name: 'Lighting for ship guidance and illumination',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '35000000',
    name: 'Security, fire-fighting, police and defence equipment',
    countWithChildren: 7,
    children: [
      {
        code: '35100000',
        name: 'Emergency and security equipment',
        countWithChildren: 2,
        children: [
          {
            code: '35110000',
            name: 'Firefighting, rescue and safety equipment',
            countWithChildren: 1,
            children: [
              {
                code: '35113000',
                name: 'Safety equipment',
                countWithChildren: 1,
                children: [
                  {
                    code: '35113400',
                    name: 'Protective and safety clothing',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '35113420',
                        name: 'Nuclear and radiological protection clothing',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            code: '35120000',
            name: 'Surveillance and security systems and devices',
            countWithChildren: 1,
            children: [
              {
                code: '35121000',
                name: 'Security equipment',
                countWithChildren: 1,
                children: [
                  {
                    code: '35121700',
                    name: 'Alarm systems',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '35200000',
        name: 'Police equipment',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
      {
        code: '35500000',
        name: 'Warships and associated parts',
        countWithChildren: 1,
        children: [
          {
            code: '35510000',
            name: 'Warships',
            countWithChildren: 1,
            children: [
              {
                code: '35512000',
                name: 'Submarines',
                countWithChildren: 1,
                children: [
                  {
                    code: '35512400',
                    name: 'Unmanned underwater vehicles',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '35800000',
        name: 'Individual and support equipment',
        countWithChildren: 3,
        children: [
          {
            code: '35810000',
            name: 'Individual equipment',
            countWithChildren: 3,
            children: [
              {
                code: '35811000',
                countWithChildren: 3,
                children: [
                  {
                    code: '35811200',
                    name: 'Police uniforms',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                  {
                    code: '35811300',
                    name: 'Military uniforms',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '37000000',
    name:
      'Musical instruments, sport goods, games, toys, handicraft, art materials and accessories',
    countWithoutChildren: 1,
    countWithChildren: 5,
    children: [
      {
        code: '37400000',
        name: 'Sports goods and equipment',
        countWithoutChildren: 1,
        countWithChildren: 2,
        children: [
          {
            code: '37410000',
            name: 'Outdoor sports equipment',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '37500000',
        name: 'Games and toys; fairground amusements',
        countWithChildren: 1,
        children: [
          {
            code: '37520000',
            name: 'Toys',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '37800000',
        name: 'Handicraft and art supplies',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
    ],
  },
  {
    code: '38000000',
    name: 'Laboratory, optical and precision equipments (excl. glasses)',
    countWithoutChildren: 21,
    countWithChildren: 39,
    children: [
      {
        code: '38100000',
        name: 'Navigational and meteorological instruments',
        countWithChildren: 2,
        children: [
          {
            code: '38110000',
            name: 'Navigational instruments',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '38114000',
                name: 'Echo sounders',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '38400000',
        name: 'Instruments for checking physical characteristics',
        countWithoutChildren: 1,
        countWithChildren: 2,
        children: [
          {
            code: '38430000',
            name: 'Detection and analysis apparatus',
            countWithChildren: 1,
            children: [
              {
                code: '38434000',
                name: 'Analysers',
                countWithChildren: 1,
                children: [
                  {
                    code: '38434500',
                    name: 'Biochemical analysers',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '38434520',
                        name: 'Blood analysers',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '38500000',
        name: 'Checking and testing apparatus',
        countWithChildren: 11,
        children: [
          {
            code: '38510000',
            name: 'Microscopes',
            countWithoutChildren: 3,
            countWithChildren: 4,
            children: [
              {
                code: '38511000',
                name: 'Electron microscopes',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '38520000',
            name: 'Scanners',
            countWithoutChildren: 7,
            countWithChildren: 7,
            children: [],
          },
        ],
      },
      {
        code: '38600000',
        name: 'Optical instruments',
        countWithChildren: 2,
        children: [
          {
            code: '38630000',
            name: 'Astronomical and optical instruments',
            countWithChildren: 1,
            children: [
              {
                code: '38636000',
                name: 'Specialist optical instruments',
                countWithChildren: 1,
                children: [
                  {
                    code: '38636100',
                    name: 'Lasers',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '38650000',
            name: 'Photographic equipment',
            countWithChildren: 1,
            children: [
              {
                code: '38651000',
                name: 'Cameras',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '38900000',
        name: 'Miscellaneous evaluation or testing instruments',
        countWithChildren: 1,
        children: [
          {
            code: '38950000',
            name: 'Polymerase Chain Reaction (PCR) equipment',
            countWithChildren: 1,
            children: [
              {
                code: '38951000',
                name: 'Real-time Polymerase Chain Reaction (PCR) equipment',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '39000000',
    name:
      'Furniture (incl. office furniture), furnishings, domestic appliances (excl. lighting) and cleaning products',
    countWithoutChildren: 3,
    countWithChildren: 33,
    children: [
      {
        code: '39100000',
        name: 'Furniture',
        countWithoutChildren: 8,
        countWithChildren: 16,
        children: [
          {
            code: '39130000',
            name: 'Office furniture',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
          {
            code: '39140000',
            name: 'Domestic furniture',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '39141000',
                name: 'Kitchen furniture and equipment',
                countWithChildren: 1,
                children: [
                  {
                    code: '39141400',
                    name: 'Fitted kitchens',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '39150000',
            name: 'Miscellaneous furniture and equipment',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
          {
            code: '39160000',
            name: 'School furniture',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '39162000',
                name: 'Educational equipment',
                countWithChildren: 1,
                children: [
                  {
                    code: '39162100',
                    name: 'Teaching equipment',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '39200000',
        name: 'Furnishing',
        countWithChildren: 5,
        children: [
          {
            code: '39220000',
            name:
              'Kitchen equipment, household and domestic items and catering supplies',
            countWithoutChildren: 1,
            countWithChildren: 5,
            children: [
              {
                code: '39221000',
                name: 'Kitchen equipment',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '39221100',
                    name: 'Kitchenware',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '39222000',
                name: 'Catering supplies',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '39222100',
                    name: 'Disposable catering supplies',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '39500000',
        name: 'Textile articles',
        countWithChildren: 1,
        children: [
          {
            code: '39520000',
            name: 'Made-up textile articles',
            countWithChildren: 1,
            children: [
              {
                code: '39522000',
                name:
                  'Tarpaulins, sails for boats, sailboards or land craft, awnings, sunblinds, tents and camping goods',
                countWithChildren: 1,
                children: [
                  {
                    code: '39522500',
                    name: 'Textile camping goods',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '39522530',
                        name: 'Tents',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '39700000',
        name: 'Domestic appliances',
        countWithoutChildren: 1,
        countWithChildren: 3,
        children: [
          {
            code: '39710000',
            name: 'Electrical domestic appliances',
            countWithChildren: 2,
            children: [
              {
                code: '39711000',
                name: 'Electrical domestic appliances for use with foodstuffs',
                countWithChildren: 2,
                children: [
                  {
                    code: '39711300',
                    name: 'Electrothermic appliances',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '39711310',
                        name: 'Electric coffee makers',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '39800000',
        name: 'Cleaning and polishing products',
        countWithoutChildren: 4,
        countWithChildren: 5,
        children: [
          {
            code: '39830000',
            name: 'Cleaning products',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: '42000000',
    name: 'Industrial machinery',
    countWithChildren: 13,
    children: [
      {
        code: '42100000',
        name: 'Machinery for the production and use of mechanical power',
        countWithChildren: 2,
        children: [
          {
            code: '42120000',
            name: 'Pumps and compressors',
            countWithChildren: 2,
            children: [
              {
                code: '42122000',
                name: 'Pumps',
                countWithChildren: 2,
                children: [
                  {
                    code: '42122200',
                    name:
                      'Reciprocating positive-displacement pumps for liquids',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '42122220',
                        name: 'Sewage pumps',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '42500000',
        name: 'Cooling and ventilation equipment',
        countWithChildren: 2,
        children: [
          {
            code: '42510000',
            name:
              'Heat-exchange units, air-conditioning and refrigerating equipment, and filtering machinery',
            countWithChildren: 2,
            children: [
              {
                code: '42514000',
                name:
                  'Machinery and apparatus for filtering or purifying gases',
                countWithChildren: 2,
                children: [
                  {
                    code: '42514300',
                    name: 'Filtering apparatus',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '42514310',
                        name: 'Air filters',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '42600000',
        name: 'Machine tools',
        countWithoutChildren: 1,
        countWithChildren: 3,
        children: [
          {
            code: '42620000',
            name: 'Lathes, boring and milling machine tools',
            countWithChildren: 1,
            children: [
              {
                code: '42623000',
                name: 'Milling machines',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '42630000',
            name: 'Metal-working machine tools',
            countWithChildren: 1,
            children: [
              {
                code: '42636000',
                name: 'Presses',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '42900000',
        name: 'Miscellaneous general and special-purpose machinery',
        countWithChildren: 6,
        children: [
          {
            code: '42910000',
            name: 'Distilling, filtering or rectifying apparatus',
            countWithChildren: 3,
            children: [
              {
                code: '42912000',
                name: 'Liquid filtering or purifying machinery and apparatus',
                countWithChildren: 3,
                children: [
                  {
                    code: '42912300',
                    name:
                      'Machinery and apparatus for filtering or purifying water',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '42920000',
            name:
              'Machinery for cleaning bottles, packing and weighing and spraying machinery',
            countWithChildren: 1,
            children: [
              {
                code: '42921000',
                name:
                  'Machinery for cleaning, filling, packing or wrapping bottles or other containers',
                countWithChildren: 1,
                children: [
                  {
                    code: '42921300',
                    name: 'Packing or wrapping machinery',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '42960000',
            name:
              'Command and control system, printing, graphics, office automation and information-processing equipment',
            countWithChildren: 1,
            children: [
              {
                code: '42961000',
                name: 'Command and control system',
                countWithChildren: 1,
                children: [
                  {
                    code: '42961100',
                    name: 'Access control system',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '42990000',
            name: 'Miscellaneous special-purpose machinery',
            countWithChildren: 1,
            children: [
              {
                code: '42996000',
                name: 'Machinery for the treatment of sewage',
                countWithChildren: 1,
                children: [
                  {
                    code: '42996100',
                    name: 'Comminutors',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '43000000',
    name: 'Machinery for mining, quarrying, construction equipment',
    countWithChildren: 5,
    children: [
      {
        code: '43200000',
        name: 'Earthmoving and excavating machinery, and associated parts',
        countWithoutChildren: 1,
        countWithChildren: 5,
        children: [
          {
            code: '43220000',
            name: 'Graders and levellers',
            countWithChildren: 1,
            children: [
              {
                code: '43221000',
                name: 'Road graders',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '43260000',
            name:
              'Mechanical shovels, excavators and shovel loaders, and mining machinery',
            countWithoutChildren: 1,
            countWithChildren: 3,
            children: [
              {
                code: '43261000',
                name: 'Mechanical shovels',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '44000000',
    name:
      'Construction structures and materials; auxiliary products to construction (except electric apparatus)',
    countWithChildren: 20,
    children: [
      {
        code: '44100000',
        name: 'Construction materials and associated items',
        countWithoutChildren: 2,
        countWithChildren: 9,
        children: [
          {
            code: '44110000',
            name: 'Construction materials',
            countWithoutChildren: 3,
            countWithChildren: 6,
            children: [
              {
                code: '44111000',
                name: 'Building materials',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
              {
                code: '44115000',
                name: 'Building fittings',
                countWithChildren: 1,
                children: [
                  {
                    code: '44115200',
                    name: 'Plumbing and heating materials',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '44160000',
            name: 'Pipeline, piping, pipes, casing, tubing and related items',
            countWithChildren: 1,
            children: [
              {
                code: '44162000',
                name: 'Piping',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '44200000',
        name: 'Structural products',
        countWithChildren: 3,
        children: [
          {
            code: '44210000',
            name: 'Structures and parts of structures',
            countWithChildren: 3,
            children: [
              {
                code: '44211000',
                name: 'Prefabricated buildings',
                countWithoutChildren: 1,
                countWithChildren: 3,
                children: [
                  {
                    code: '44211100',
                    name: 'Modular and portable buildings',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '44211500',
                    name: 'Glasshouses',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '44400000',
        name: 'Miscellaneous fabricated products and related items',
        countWithChildren: 1,
        children: [
          {
            code: '44420000',
            name: 'Goods used in construction',
            countWithChildren: 1,
            children: [
              {
                code: '44423000',
                name: 'Miscellaneous articles',
                countWithChildren: 1,
                children: [
                  {
                    code: '44423400',
                    name: 'Signs and related items',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '44423460',
                        name: 'Address plates',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '44500000',
        name: 'Tools, locks, keys, hinges, fasteners, chain and springs',
        countWithoutChildren: 1,
        countWithChildren: 2,
        children: [
          {
            code: '44510000',
            name: 'Tools',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '44600000',
        name:
          'Tanks, reservoirs and containers; central-heating radiators and boilers',
        countWithChildren: 5,
        children: [
          {
            code: '44610000',
            name: 'Tanks, reservoirs, containers and pressure vessels',
            countWithChildren: 5,
            children: [
              {
                code: '44613000',
                name: 'Large containers',
                countWithChildren: 4,
                children: [
                  {
                    code: '44613200',
                    name: 'Refrigerated containers',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '44613300',
                    name: 'Standard freight containers',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '44613700',
                    name: 'Refuse skips',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '44617000',
                name: 'Boxes',
                countWithChildren: 1,
                children: [
                  {
                    code: '44617100',
                    name: 'Cartons',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '45000000',
    name: 'Construction work',
    countWithoutChildren: 38,
    countWithChildren: 101,
    children: [
      {
        code: '45100000',
        name: 'Site preparation work',
        countWithChildren: 2,
        children: [
          {
            code: '45110000',
            name: 'Building demolition and wrecking work and earthmoving work',
            countWithChildren: 2,
            children: [
              {
                code: '45111000',
                name: 'Demolition, site preparation and clearance work',
                countWithChildren: 1,
                children: [
                  {
                    code: '45111200',
                    name: 'Site preparation and clearance work',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '45112000',
                name: 'Excavating and earthmoving work',
                countWithChildren: 1,
                children: [
                  {
                    code: '45112700',
                    name: 'Landscaping work',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '45200000',
        name:
          'Works for complete or part construction and civil engineering work',
        countWithoutChildren: 2,
        countWithChildren: 38,
        children: [
          {
            code: '45210000',
            name: 'Building construction work',
            countWithoutChildren: 1,
            countWithChildren: 23,
            children: [
              {
                code: '45212000',
                name:
                  'Construction work for buildings relating to leisure, sports, culture, lodging and restaurants',
                countWithChildren: 6,
                children: [
                  {
                    code: '45212200',
                    name: 'Construction work for sports facilities',
                    countWithoutChildren: 1,
                    countWithChildren: 5,
                    children: [
                      {
                        code: '45212210',
                        name:
                          'Single-purpose sports facilities construction work',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '45212212',
                            name: 'Construction work for swimming pool',
                            count: 1,
                          },
                        ],
                      },
                      {
                        code: '45212220',
                        name:
                          'Multi-purpose sports facilities construction work',
                        countWithChildren: 3,
                        children: [
                          {
                            code: '45212224',
                            name: 'Stadium construction work',
                            count: 1,
                          },
                          {
                            code: '45212225',
                            name: 'Sports hall construction work',
                            count: 2,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    code: '45212300',
                    name: 'Construction work for art and cultural buildings',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45212360',
                        name: 'Religious buildings construction work',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '45212361',
                            name: 'Church construction work',
                            count: 1,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                code: '45214000',
                name:
                  'Construction work for buildings relating to education and research',
                countWithChildren: 10,
                children: [
                  {
                    code: '45214100',
                    name: 'Construction work for kindergarten buildings',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '45214200',
                    name: 'Construction work for school buildings',
                    countWithoutChildren: 7,
                    countWithChildren: 8,
                    children: [
                      {
                        code: '45214210',
                        name: 'Primary school construction work',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '45214400',
                    name: 'Construction work for university buildings',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45214420',
                        name: 'Lecture theatre construction work',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '45215000',
                name:
                  'Construction work for buildings relating to health and social services, for crematoriums and public conveniences',
                countWithChildren: 4,
                children: [
                  {
                    code: '45215100',
                    name: 'Construction work for buildings relating to health',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '45215200',
                    name: 'Construction work for social services buildings',
                    countWithoutChildren: 1,
                    countWithChildren: 3,
                    children: [
                      {
                        code: '45215220',
                        name:
                          'Construction work for social facilities other than subsidised residential accommodation',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '45215221',
                            name: 'Daycare centre construction work',
                            count: 1,
                          },
                          {
                            code: '45215222',
                            name: 'Civic centre construction work',
                            count: 1,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                code: '45216000',
                name:
                  'Construction work for buildings relating to law and order or emergency services and for military buildings',
                countWithChildren: 2,
                children: [
                  {
                    code: '45216100',
                    name:
                      'Construction work for buildings relating to law and order or emergency services',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '45216120',
                        name:
                          'Construction work for buildings relating to emergency services',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '45216121',
                            name: 'Fire station construction work',
                            count: 2,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            code: '45220000',
            name: 'Engineering works and construction works',
            countWithChildren: 3,
            children: [
              {
                code: '45222000',
                name:
                  'Construction work for engineering works except bridges, tunnels, shafts and subways',
                countWithChildren: 2,
                children: [
                  {
                    code: '45222100',
                    name: 'Waste-treatment plant construction work',
                    countWithoutChildren: 1,
                    countWithChildren: 2,
                    children: [
                      {
                        code: '45222110',
                        name: 'Waste disposal site construction work',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '45223000',
                name: 'Structures construction work',
                countWithChildren: 1,
                children: [
                  {
                    code: '45223800',
                    name: 'Assembly and erection of prefabricated structures',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '45230000',
            name:
              'Construction work for pipelines, communication and power lines, for highways, roads, airfields and railways; flatwork',
            countWithChildren: 7,
            children: [
              {
                code: '45231000',
                name:
                  'Construction work for pipelines, communication and power lines',
                countWithChildren: 1,
                children: [
                  {
                    code: '45231500',
                    name: 'Compressed-air pipeline work',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45231510',
                        name: 'Compressed-air pipeline work for mailing system',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '45232000',
                name: 'Ancillary works for pipelines and cables',
                countWithChildren: 2,
                children: [
                  {
                    code: '45232300',
                    name:
                      'Construction and ancillary works for telephone and communication lines',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '45233000',
                name:
                  'Construction, foundation and surface works for highways, roads',
                countWithChildren: 3,
                children: [
                  {
                    code: '45233100',
                    name: 'Construction work for highways, roads',
                    countWithoutChildren: 1,
                    countWithChildren: 3,
                    children: [
                      {
                        code: '45233140',
                        name: 'Roadworks',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '45233141',
                            name: 'Road-maintenance works',
                            count: 2,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                code: '45235000',
                name:
                  'Construction work for airfields, runways and manoeuvring surfaces',
                countWithChildren: 1,
                children: [
                  {
                    code: '45235100',
                    name: 'Construction work for airports',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '45260000',
            name: 'Roof works and other special trade construction works',
            countWithChildren: 3,
            children: [
              {
                code: '45261000',
                name: 'Erection and related works of roof frames and coverings',
                countWithChildren: 1,
                children: [
                  {
                    code: '45261400',
                    name: 'Sheeting work',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45261420',
                        name: 'Waterproofing work',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '45262000',
                name: 'Special trade construction works other than roof works',
                countWithChildren: 2,
                children: [
                  {
                    code: '45262400',
                    name: 'Structural steel erection work',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45262410',
                        name: 'Structural steel erection work for buildings',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '45262700',
                    name: 'Building alteration work',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '45300000',
        name: 'Building installation work',
        countWithChildren: 15,
        children: [
          {
            code: '45310000',
            name: 'Electrical installation work',
            countWithoutChildren: 6,
            countWithChildren: 8,
            children: [
              {
                code: '45313000',
                name: 'Lift and escalator installation work',
                countWithChildren: 1,
                children: [
                  {
                    code: '45313100',
                    name: 'Lift installation work',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '45316000',
                name:
                  'Installation work of illumination and signalling systems',
                countWithChildren: 1,
                children: [
                  {
                    code: '45316100',
                    name: 'Installation of outdoor illumination equipment',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '45330000',
            name: 'Plumbing and sanitary works',
            countWithoutChildren: 3,
            countWithChildren: 7,
            children: [
              {
                code: '45331000',
                name:
                  'Heating, ventilation and air-conditioning installation work',
                countWithoutChildren: 2,
                countWithChildren: 4,
                children: [
                  {
                    code: '45331200',
                    name: 'Ventilation and air-conditioning installation work',
                    countWithoutChildren: 1,
                    countWithChildren: 2,
                    children: [
                      {
                        code: '45331230',
                        name: 'Installation work of cooling equipment',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '45331231',
                            name:
                              'Installation work of refrigeration equipment',
                            count: 1,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '45400000',
        name: 'Building completion work',
        countWithoutChildren: 1,
        countWithChildren: 8,
        children: [
          {
            code: '45420000',
            name: 'Joinery and carpentry installation work',
            countWithChildren: 3,
            children: [
              {
                code: '45422000',
                name: 'Carpentry installation work',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
            ],
          },
          {
            code: '45440000',
            name: 'Painting and glazing work',
            countWithoutChildren: 1,
            countWithChildren: 3,
            children: [
              {
                code: '45441000',
                name: 'Glazing work',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '45442000',
                name: 'Application work of protective coatings',
                countWithChildren: 1,
                children: [
                  {
                    code: '45442100',
                    name: 'Painting work',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '45450000',
            name: 'Other building completion work',
            countWithChildren: 1,
            children: [
              {
                code: '45453000',
                name: 'Overhaul and refurbishment work',
                countWithChildren: 1,
                children: [
                  {
                    code: '45453100',
                    name: 'Refurbishment work',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '48000000',
    name: 'Software package and information systems',
    countWithoutChildren: 11,
    countWithChildren: 24,
    children: [
      {
        code: '48100000',
        name: 'Industry specific software package',
        countWithChildren: 2,
        children: [
          {
            code: '48110000',
            name: 'Point of sale (POS) software package',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '48170000',
            name: 'Compliance software package',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '48200000',
        name: 'Networking, Internet and intranet software package',
        countWithoutChildren: 1,
        countWithChildren: 2,
        children: [
          {
            code: '48210000',
            name: 'Networking software package',
            countWithChildren: 1,
            children: [
              {
                code: '48219000',
                name: 'Miscellaneous networking software package',
                countWithChildren: 1,
                children: [
                  {
                    code: '48219300',
                    name: 'Administration software package',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '48300000',
        name:
          'Document creation, drawing, imaging, scheduling and productivity software package',
        countWithChildren: 2,
        children: [
          {
            code: '48320000',
            name: 'Drawing and imaging software package',
            countWithChildren: 2,
            children: [
              {
                code: '48328000',
                name: 'Image-processing software package',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '48329000',
                name: 'Imaging and archiving system',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '48400000',
        name: 'Business transaction and personal business software package',
        countWithoutChildren: 2,
        countWithChildren: 3,
        children: [
          {
            code: '48460000',
            name:
              'Analytical, scientific, mathematical or forecasting software package',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '48600000',
        name: 'Database and operating software package',
        countWithoutChildren: 1,
        countWithChildren: 2,
        children: [
          {
            code: '48610000',
            name: 'Database systems',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '48700000',
        name: 'Software package utilities',
        countWithChildren: 2,
        children: [
          {
            code: '48710000',
            name: 'Backup or recovery software package',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '48730000',
            name: 'Security software package',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: '50000000',
    name: 'Repair and maintenance services',
    countWithoutChildren: 11,
    countWithChildren: 57,
    children: [
      {
        code: '50100000',
        name:
          'Repair, maintenance and associated services of vehicles and related equipment',
        countWithoutChildren: 2,
        countWithChildren: 8,
        children: [
          {
            code: '50110000',
            name:
              'Repair and maintenance services of motor vehicles and associated equipment',
            countWithChildren: 6,
            children: [
              {
                code: '50111000',
                name: 'Fleet management, repair and maintenance services',
                countWithoutChildren: 2,
                countWithChildren: 4,
                children: [
                  {
                    code: '50111100',
                    name: 'Vehicle-fleet management services',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '50112000',
                name: 'Repair and maintenance services of cars',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '50117000',
                name: 'Vehicle conversion and reconditioning services',
                countWithChildren: 1,
                children: [
                  {
                    code: '50117100',
                    name: 'Motor vehicle conversion services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '50200000',
        name:
          'Repair, maintenance and associated services related to aircraft, railways, roads and marine equipment',
        countWithChildren: 5,
        children: [
          {
            code: '50220000',
            name:
              'Repair, maintenance and associated services related to railways and other equipment',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '50230000',
            name:
              'Repair, maintenance and associated services related to roads and other equipment',
            countWithChildren: 2,
            children: [
              {
                code: '50232000',
                name:
                  'Maintenance services of public-lighting installations and traffic lights',
                countWithChildren: 2,
                children: [
                  {
                    code: '50232100',
                    name: 'Street-lighting maintenance services',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '50240000',
            name:
              'Repair, maintenance and associated services related to marine and other equipment',
            countWithChildren: 2,
            children: [
              {
                code: '50241000',
                name: 'Repair and maintenance services of ships',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '50400000',
        name:
          'Repair and maintenance services of medical and precision equipment',
        countWithChildren: 5,
        children: [
          {
            code: '50410000',
            name:
              'Repair and maintenance services of measuring, testing and checking apparatus',
            countWithChildren: 3,
            children: [
              {
                code: '50413000',
                name: 'Repair and maintenance services of checking apparatus',
                countWithChildren: 3,
                children: [
                  {
                    code: '50413100',
                    name:
                      'Repair and maintenance services of gas-detection equipment',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '50413200',
                    name:
                      'Repair and maintenance services of firefighting equipment',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '50420000',
            name:
              'Repair and maintenance services of medical and surgical equipment',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '50421000',
                name: 'Repair and maintenance services of medical equipment',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '50500000',
        name:
          'Repair and maintenance services for pumps, valves, taps and metal containers and machinery',
        countWithChildren: 4,
        children: [
          {
            code: '50510000',
            name:
              'Repair and maintenance services of pumps, valves, taps and metal containers',
            countWithChildren: 2,
            children: [
              {
                code: '50514000',
                name: 'Repair and maintenance services of metal containers',
                countWithChildren: 2,
                children: [
                  {
                    code: '50514300',
                    name: 'Sleeving repair services',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '50530000',
            name: 'Repair and maintenance services of machinery',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '50531000',
                name:
                  'Repair and maintenance services for non-electrical machinery',
                countWithChildren: 1,
                children: [
                  {
                    code: '50531300',
                    name: 'Repair and maintenance services of compressors',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '50700000',
        name: 'Repair and maintenance services of building installations',
        countWithoutChildren: 7,
        countWithChildren: 23,
        children: [
          {
            code: '50710000',
            name:
              'Repair and maintenance services of electrical and mechanical building installations',
            countWithoutChildren: 2,
            countWithChildren: 12,
            children: [
              {
                code: '50711000',
                name:
                  'Repair and maintenance services of electrical building installations',
                countWithoutChildren: 9,
                countWithChildren: 9,
                children: [],
              },
              {
                code: '50712000',
                name:
                  'Repair and maintenance services of mechanical building installations',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '50720000',
            name: 'Repair and maintenance services of central heating',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '50730000',
            name: 'Repair and maintenance services of cooler groups',
            countWithoutChildren: 3,
            countWithChildren: 3,
            children: [],
          },
        ],
      },
      {
        code: '50800000',
        name: 'Miscellaneous repair and maintenance services',
        countWithChildren: 1,
        children: [
          {
            code: '50850000',
            name: 'Repair and maintenance services of furniture',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: '51000000',
    name: 'Installation services (except software)',
    countWithoutChildren: 1,
    countWithChildren: 8,
    children: [
      {
        code: '51100000',
        name: 'Installation services of electrical and mechanical equipment',
        countWithoutChildren: 1,
        countWithChildren: 5,
        children: [
          {
            code: '51110000',
            name: 'Installation services of electrical equipment',
            countWithoutChildren: 4,
            countWithChildren: 4,
            children: [],
          },
        ],
      },
      {
        code: '51300000',
        name: 'Installation services of communications equipment',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
      {
        code: '51700000',
        name: 'Installation services of fire protection equipment',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
    ],
  },
  {
    code: '55000000',
    name: 'Hotel, restaurant and retail trade services',
    countWithChildren: 7,
    children: [
      {
        code: '55100000',
        name: 'Hotel services',
        countWithChildren: 3,
        children: [
          {
            code: '55110000',
            name: 'Hotel accommodation services',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
          {
            code: '55120000',
            name: 'Hotel meeting and conference services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '55200000',
        name: 'Camping sites and other non-hotel accommodation',
        countWithChildren: 2,
        children: [
          {
            code: '55240000',
            name: 'Holiday centre and holiday home services',
            countWithChildren: 1,
            children: [
              {
                code: '55243000',
                name: "Children's holiday-camp services",
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '55250000',
            name: 'Letting services of short-stay furnished accommodation',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '55500000',
        name: 'Canteen and catering services',
        countWithChildren: 2,
        children: [
          {
            code: '55510000',
            name: 'Canteen services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '55520000',
            name: 'Catering services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: '60000000',
    name: 'Transport services (excl. Waste transport)',
    countWithoutChildren: 8,
    countWithChildren: 59,
    children: [
      {
        code: '60100000',
        name: 'Road transport services',
        countWithoutChildren: 14,
        countWithChildren: 37,
        children: [
          {
            code: '60120000',
            name: 'Taxi services',
            countWithoutChildren: 7,
            countWithChildren: 7,
            children: [],
          },
          {
            code: '60130000',
            name: 'Special-purpose road passenger-transport services',
            countWithoutChildren: 4,
            countWithChildren: 4,
            children: [],
          },
          {
            code: '60140000',
            name: 'Non-scheduled passenger transport',
            countWithoutChildren: 6,
            countWithChildren: 6,
            children: [],
          },
          {
            code: '60160000',
            name: 'Mail transport by road',
            countWithChildren: 2,
            children: [
              {
                code: '60161000',
                name: 'Parcel transport services',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '60180000',
            name: 'Hire of goods-transport vehicles with driver',
            countWithoutChildren: 1,
            countWithChildren: 4,
            children: [
              {
                code: '60181000',
                name: 'Hire of trucks with driver',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '60182000',
                name: 'Hire of industrial vehicles with driver',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '60600000',
        name: 'Water transport services',
        countWithoutChildren: 2,
        countWithChildren: 14,
        children: [
          {
            code: '60610000',
            name: 'Ferry transport services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '60650000',
            name: 'Hire of water transport equipment with crew',
            countWithChildren: 11,
            children: [
              {
                code: '60651000',
                name: 'Hire of vessels with crew',
                countWithoutChildren: 5,
                countWithChildren: 5,
                children: [],
              },
              {
                code: '60653000',
                name: 'Hire of boats with crew',
                countWithoutChildren: 6,
                countWithChildren: 6,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '63000000',
    name:
      'Supporting and auxiliary transport services; travel agencies services',
    countWithChildren: 9,
    children: [
      {
        code: '63500000',
        name: 'Travel agency, tour operator and tourist assistance services',
        countWithoutChildren: 1,
        countWithChildren: 5,
        children: [
          {
            code: '63510000',
            name: 'Travel agency and similar services',
            countWithoutChildren: 4,
            countWithChildren: 4,
            children: [],
          },
        ],
      },
      {
        code: '63700000',
        name: 'Support services for land, water and air transport',
        countWithChildren: 4,
        children: [
          {
            code: '63710000',
            name: 'Support services for land transport',
            countWithChildren: 2,
            children: [
              {
                code: '63712000',
                name: 'Support services for road transport',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '63712400',
                    name: 'Parking services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '63720000',
            name: 'Support services for water transport',
            countWithChildren: 1,
            children: [
              {
                code: '63726000',
                name: 'Miscellaneous water transport support services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '63730000',
            name: 'Support services for air transport',
            countWithChildren: 1,
            children: [
              {
                code: '63731000',
                name: 'Airport operation services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '64000000',
    name: 'Postal and telecommunications services',
    countWithChildren: 14,
    children: [
      {
        code: '64100000',
        name: 'Post and courier services',
        countWithoutChildren: 2,
        countWithChildren: 3,
        children: [
          {
            code: '64110000',
            name: 'Postal services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '64200000',
        name: 'Telecommunications services',
        countWithoutChildren: 6,
        countWithChildren: 11,
        children: [
          {
            code: '64210000',
            name: 'Telephone and data transmission services',
            countWithoutChildren: 2,
            countWithChildren: 5,
            children: [
              {
                code: '64212000',
                name: 'Mobile-telephone services',
                countWithChildren: 1,
                children: [
                  {
                    code: '64212100',
                    name: 'Short Message Service (SMS) services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '64214000',
                name: 'Dedicated-business telephone network services',
                countWithChildren: 2,
                children: [
                  {
                    code: '64214400',
                    name: 'Communication land-line rental',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '66000000',
    name: 'Financial and insurance services',
    countWithoutChildren: 4,
    countWithChildren: 25,
    children: [
      {
        code: '66100000',
        name: 'Banking and investment services',
        countWithoutChildren: 1,
        countWithChildren: 10,
        children: [
          {
            code: '66110000',
            name: 'Banking services',
            countWithoutChildren: 3,
            countWithChildren: 7,
            children: [
              {
                code: '66114000',
                name: 'Financial leasing services',
                countWithoutChildren: 4,
                countWithChildren: 4,
                children: [],
              },
            ],
          },
          {
            code: '66150000',
            name: 'Financial markets administration services',
            countWithChildren: 1,
            children: [
              {
                code: '66152000',
                name: 'Financial market regulatory services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '66170000',
            name:
              'Financial consultancy, financial transaction processing and clearing-house services',
            countWithChildren: 1,
            children: [
              {
                code: '66171000',
                name: 'Financial consultancy services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '66500000',
        name: 'Insurance and pension services',
        countWithChildren: 11,
        children: [
          {
            code: '66510000',
            name: 'Insurance services',
            countWithoutChildren: 9,
            countWithChildren: 11,
            children: [
              {
                code: '66511000',
                name: 'Life insurance services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '66514000',
                name:
                  'Freight insurance and Insurance services relating to transport',
                countWithChildren: 1,
                children: [
                  {
                    code: '66514100',
                    name: 'Insurance related to Transport',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '66514110',
                        name: 'Motor vehicle insurance services',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '70000000',
    name: 'Real estate services',
    countWithoutChildren: 1,
    countWithChildren: 3,
    children: [
      {
        code: '70100000',
        name: 'Real estate services with own property',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
      {
        code: '70200000',
        name: 'Renting or leasing services of own property',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
    ],
  },
  {
    code: '71000000',
    name: 'Architectural, construction, engineering and inspection services',
    countWithoutChildren: 15,
    countWithChildren: 98,
    children: [
      {
        code: '71200000',
        name: 'Architectural and related services',
        countWithoutChildren: 5,
        countWithChildren: 10,
        children: [
          {
            code: '71210000',
            name: 'Advisory architectural services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '71220000',
            name: 'Architectural design services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '71240000',
            name: 'Architectural, engineering and planning services',
            countWithoutChildren: 3,
            countWithChildren: 3,
            children: [],
          },
        ],
      },
      {
        code: '71300000',
        name: 'Engineering services',
        countWithoutChildren: 2,
        countWithChildren: 52,
        children: [
          {
            code: '71310000',
            name: 'Consultative engineering and construction services',
            countWithoutChildren: 14,
            countWithChildren: 32,
            children: [
              {
                code: '71311000',
                name: 'Civil engineering consultancy services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '71313000',
                name: 'Environmental engineering consultancy services',
                countWithChildren: 1,
                children: [
                  {
                    code: '71313200',
                    name:
                      'Sound insulation and room acoustics consultancy services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '71314000',
                name: 'Energy and related services',
                countWithoutChildren: 4,
                countWithChildren: 6,
                children: [
                  {
                    code: '71314200',
                    name: 'Energy-management services',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '71315000',
                name: 'Building services',
                countWithChildren: 7,
                children: [
                  {
                    code: '71315200',
                    name: 'Building consultancy services',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                  {
                    code: '71315300',
                    name: 'Building surveying services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '71315400',
                    name: 'Building-inspection services',
                    countWithChildren: 3,
                    children: [
                      {
                        code: '71315410',
                        name: 'Inspection of ventilation system',
                        countWithoutChildren: 3,
                        countWithChildren: 3,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '71317000',
                name: 'Hazard protection and control consultancy services',
                countWithChildren: 1,
                children: [
                  {
                    code: '71317200',
                    name: 'Health and safety services',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '71317210',
                        name: 'Health and safety consultancy services',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '71318000',
                name: 'Advisory and consultative engineering services',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '71320000',
            name: 'Engineering design services',
            countWithoutChildren: 5,
            countWithChildren: 8,
            children: [
              {
                code: '71322000',
                name:
                  'Engineering design services for the construction of civil engineering works',
                countWithoutChildren: 1,
                countWithChildren: 3,
                children: [
                  {
                    code: '71322300',
                    name: 'Bridge-design services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '71322500',
                    name:
                      'Engineering-design services for traffic installations',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '71330000',
            name: 'Miscellaneous engineering services',
            countWithChildren: 3,
            children: [
              {
                code: '71332000',
                name: 'Geotechnical engineering services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '71334000',
                name: 'Mechanical and electrical engineering services',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '71350000',
            name: 'Engineering-related scientific and technical services',
            countWithChildren: 7,
            children: [
              {
                code: '71351000',
                name:
                  'Geological, geophysical and other scientific prospecting services',
                countWithChildren: 1,
                children: [
                  {
                    code: '71351500',
                    name: 'Ground investigation services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '71354000',
                name: 'Map-making services',
                countWithChildren: 1,
                children: [
                  {
                    code: '71354100',
                    name: 'Digital mapping services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '71355000',
                name: 'Surveying services',
                countWithChildren: 1,
                children: [
                  {
                    code: '71355200',
                    name: 'Ordnance surveying',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '71356000',
                name: 'Technical services',
                countWithChildren: 4,
                children: [
                  {
                    code: '71356100',
                    name: 'Technical control services',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                  {
                    code: '71356200',
                    name: 'Technical assistance services',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '71400000',
        name: 'Urban planning and landscape architectural services',
        countWithoutChildren: 3,
        countWithChildren: 4,
        children: [
          {
            code: '71410000',
            name: 'Urban planning services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '71500000',
        name: 'Construction-related services',
        countWithChildren: 13,
        children: [
          {
            code: '71520000',
            name: 'Construction supervision services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '71540000',
            name: 'Construction management services',
            countWithoutChildren: 4,
            countWithChildren: 12,
            children: [
              {
                code: '71541000',
                name: 'Construction project management services',
                countWithoutChildren: 8,
                countWithChildren: 8,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '71600000',
        name: 'Technical testing, analysis and consultancy services',
        countWithoutChildren: 1,
        countWithChildren: 2,
        children: [
          {
            code: '71630000',
            name: 'Technical inspection and testing services',
            countWithChildren: 1,
            children: [
              {
                code: '71631000',
                name: 'Technical inspection services',
                countWithChildren: 1,
                children: [
                  {
                    code: '71631400',
                    name:
                      'Technical inspection services of engineering structures',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '71800000',
        name: 'Consulting services for water-supply and waste consultancy',
        countWithoutChildren: 2,
        countWithChildren: 2,
        children: [],
      },
    ],
  },
  {
    code: '72000000',
    name: 'IT servis: consulting, software development, Internet and support',
    countWithoutChildren: 27,
    countWithChildren: 113,
    children: [
      {
        code: '72200000',
        name: 'Software programming and consultancy services',
        countWithoutChildren: 3,
        countWithChildren: 71,
        children: [
          {
            code: '72210000',
            name: 'Programming services of packaged software products',
            countWithChildren: 13,
            children: [
              {
                code: '72212000',
                name: 'Programming services of application software',
                countWithChildren: 13,
                children: [
                  {
                    code: '72212100',
                    name: 'Industry specific software development services',
                    countWithChildren: 3,
                    children: [
                      {
                        code: '72212190',
                        name: 'Educational software development services',
                        countWithoutChildren: 3,
                        countWithChildren: 3,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '72212200',
                    name:
                      'Networking, Internet and intranet software development services',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '72212220',
                        name:
                          'Internet and intranet software development services',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '72212300',
                    name:
                      'Document creation, drawing, imaging, scheduling and productivity software development services',
                    countWithChildren: 5,
                    children: [
                      {
                        code: '72212310',
                        name: 'Document creation software development services',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '72212311',
                            name:
                              'Document management software development services',
                            count: 2,
                          },
                        ],
                      },
                      {
                        code: '72212320',
                        name:
                          'Drawing and imaging software development services',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '72212326',
                            name: 'Mapping software development services',
                            count: 1,
                          },
                          {
                            code: '72212327',
                            name:
                              'Drawing and painting software development services',
                            count: 1,
                          },
                        ],
                      },
                      {
                        code: '72212330',
                        name:
                          'Scheduling and productivity software development services',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '72212332',
                            name: 'Scheduling software development services',
                            count: 1,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    code: '72212400',
                    name:
                      'Business transaction and personal business software development services',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '72212440',
                        name:
                          'Financial analysis and accounting software development services',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '72212441',
                            name:
                              'Financial analysis software development services',
                            count: 1,
                          },
                        ],
                      },
                      {
                        code: '72212450',
                        name:
                          'Time accounting or human resources software development services',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '72212700',
                    name: 'Software development services utilities',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '72212770',
                        name:
                          'General, compression and print utility software development services',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '72212772',
                            name: 'Print utility software development services',
                            count: 1,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    code: '72212900',
                    name:
                      'Miscellaneous software development services and computer systems',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '72212940',
                        name:
                          'Pattern design and calendar software development services',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '72212941',
                            name:
                              'Pattern design software development services',
                            count: 1,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            code: '72220000',
            name: 'Systems and technical consultancy services',
            countWithoutChildren: 15,
            countWithChildren: 25,
            children: [
              {
                code: '72222000',
                name:
                  'Information systems or technology strategic review and planning services',
                countWithChildren: 4,
                children: [
                  {
                    code: '72222300',
                    name: 'Information technology services',
                    countWithoutChildren: 4,
                    countWithChildren: 4,
                    children: [],
                  },
                ],
              },
              {
                code: '72224000',
                name: 'Project management consultancy services',
                countWithoutChildren: 4,
                countWithChildren: 5,
                children: [
                  {
                    code: '72224100',
                    name: 'System implementation planning services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '72225000',
                name: 'System quality assurance assessment and review services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '72230000',
            name: 'Custom software development services',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
          {
            code: '72250000',
            name: 'System and support services',
            countWithoutChildren: 1,
            countWithChildren: 3,
            children: [
              {
                code: '72252000',
                name: 'Computer archiving services',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '72260000',
            name: 'Software-related services',
            countWithoutChildren: 2,
            countWithChildren: 25,
            children: [
              {
                code: '72262000',
                name: 'Software development services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '72266000',
                name: 'Software consultancy services',
                countWithoutChildren: 15,
                countWithChildren: 15,
                children: [],
              },
              {
                code: '72267000',
                name: 'Software maintenance and repair services',
                countWithChildren: 3,
                children: [
                  {
                    code: '72267100',
                    name: 'Maintenance of information technology software',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                ],
              },
              {
                code: '72268000',
                name: 'Software supply services',
                countWithoutChildren: 4,
                countWithChildren: 4,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '72300000',
        name: 'Data services',
        countWithoutChildren: 2,
        countWithChildren: 6,
        children: [
          {
            code: '72310000',
            name: 'Data-processing services',
            countWithoutChildren: 1,
            countWithChildren: 4,
            children: [
              {
                code: '72314000',
                name: 'Data collection and collation services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '72315000',
                name: 'Data network management and support services',
                countWithChildren: 1,
                children: [
                  {
                    code: '72315200',
                    name: 'Data network management services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '72318000',
                name: 'Data transmission services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '72400000',
        name: 'Internet services',
        countWithChildren: 3,
        children: [
          {
            code: '72410000',
            name: 'Provider services',
            countWithChildren: 3,
            children: [
              {
                code: '72413000',
                name: 'World wide web (www) site design services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '72415000',
                name: 'World wide web (www) site operation host services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '72416000',
                name: 'Application service providers',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '72500000',
        name: 'Computer-related services',
        countWithChildren: 3,
        children: [
          {
            code: '72510000',
            name: 'Computer-related management services',
            countWithoutChildren: 2,
            countWithChildren: 3,
            children: [
              {
                code: '72514000',
                name: 'Computer facilities management services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '72700000',
        name: 'Computer network services',
        countWithChildren: 2,
        children: [
          {
            code: '72720000',
            name: 'Wide area network services',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
        ],
      },
      {
        code: '72900000',
        name: 'Computer back-up and catalogue conversion services',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
    ],
  },
  {
    code: '73000000',
    name: 'Research and development services and related consultancy services',
    countWithoutChildren: 8,
    countWithChildren: 23,
    children: [
      {
        code: '73100000',
        name: 'Research and experimental development services',
        countWithoutChildren: 1,
        countWithChildren: 5,
        children: [
          {
            code: '73110000',
            name: 'Research services',
            countWithoutChildren: 3,
            countWithChildren: 4,
            children: [
              {
                code: '73111000',
                name: 'Research laboratory services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '73200000',
        name: 'Research and development consultancy services',
        countWithoutChildren: 7,
        countWithChildren: 10,
        children: [
          {
            code: '73220000',
            name: 'Development consultancy services',
            countWithoutChildren: 3,
            countWithChildren: 3,
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: '75000000',
    name: 'Administration, defence and social security services',
    countWithChildren: 5,
    children: [
      {
        code: '75200000',
        name: 'Provision of services to the community',
        countWithChildren: 5,
        children: [
          {
            code: '75230000',
            name: 'Justice services',
            countWithChildren: 2,
            children: [
              {
                code: '75231000',
                name: 'Judicial services',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '75240000',
            name: 'Public security, law and order services',
            countWithChildren: 2,
            children: [
              {
                code: '75241000',
                name: 'Public security services',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '75250000',
            name: 'Fire-brigade and rescue services',
            countWithChildren: 1,
            children: [
              {
                code: '75251000',
                name: 'Fire-brigade services',
                countWithChildren: 1,
                children: [
                  {
                    code: '75251100',
                    name: 'Firefighting services',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '75251110',
                        name: 'Fire-prevention services',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '76000000',
    name: 'Services related to the oil and gas industry',
    countWithChildren: 2,
    children: [
      {
        code: '76100000',
        name: 'Professional services for the gas industry',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
      {
        code: '76600000',
        name: 'Pipeline-inspection services',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
    ],
  },
  {
    code: '77000000',
    name:
      'Agricultural, forestry, horticultural, aquacultural and apicultural services',
    countWithChildren: 10,
    children: [
      {
        code: '77200000',
        name: 'Forestry services',
        countWithChildren: 6,
        children: [
          {
            code: '77210000',
            name: 'Logging services',
            countWithoutChildren: 6,
            countWithChildren: 6,
            children: [],
          },
        ],
      },
      {
        code: '77300000',
        name: 'Horticultural services',
        countWithChildren: 4,
        children: [
          {
            code: '77310000',
            name: 'Planting and maintenance services of green areas',
            countWithoutChildren: 2,
            countWithChildren: 4,
            children: [
              {
                code: '77313000',
                name: 'Parks maintenance services',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '79000000',
    name:
      'Business servis: law, marketing, consulting, recruitment, printing and security',
    countWithoutChildren: 2,
    countWithChildren: 104,
    children: [
      {
        code: '79100000',
        name: 'Legal services',
        countWithoutChildren: 1,
        countWithChildren: 2,
        children: [
          {
            code: '79110000',
            name: 'Legal advisory and representation services',
            countWithChildren: 1,
            children: [
              {
                code: '79111000',
                name: 'Legal advisory services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '79200000',
        name: 'Accounting, auditing and fiscal services',
        countWithoutChildren: 4,
        countWithChildren: 11,
        children: [
          {
            code: '79210000',
            name: 'Accounting and auditing services',
            countWithChildren: 7,
            children: [
              {
                code: '79211000',
                name: 'Accounting services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '79212000',
                name: 'Auditing services',
                countWithoutChildren: 3,
                countWithChildren: 6,
                children: [
                  {
                    code: '79212200',
                    name: 'Internal audit services',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '79300000',
        name: 'Market and economic research; polling and statistics',
        countWithoutChildren: 3,
        countWithChildren: 17,
        children: [
          {
            code: '79310000',
            name: 'Market research services',
            countWithChildren: 3,
            children: [
              {
                code: '79311000',
                name: 'Survey services',
                countWithChildren: 3,
                children: [
                  {
                    code: '79311100',
                    name: 'Survey design services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '79311200',
                    name: 'Survey conduction services',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '79340000',
            name: 'Advertising and marketing services',
            countWithoutChildren: 9,
            countWithChildren: 11,
            children: [
              {
                code: '79342000',
                name: 'Marketing services',
                countWithChildren: 2,
                children: [
                  {
                    code: '79342300',
                    name: 'Customer services',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '79342310',
                        name: 'Customer survey services',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '79342311',
                            name: 'Customer satisfaction survey',
                            count: 2,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '79400000',
        name: 'Business and management consultancy and related services',
        countWithoutChildren: 5,
        countWithChildren: 23,
        children: [
          {
            code: '79410000',
            name: 'Business and management consultancy services',
            countWithoutChildren: 2,
            countWithChildren: 14,
            children: [
              {
                code: '79411000',
                name: 'General management consultancy services',
                countWithChildren: 4,
                children: [
                  {
                    code: '79411100',
                    name: 'Business development consultancy services',
                    countWithoutChildren: 4,
                    countWithChildren: 4,
                    children: [],
                  },
                ],
              },
              {
                code: '79412000',
                name: 'Financial management consultancy services',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
              {
                code: '79415000',
                name: 'Production management consultancy services',
                countWithChildren: 2,
                children: [
                  {
                    code: '79415200',
                    name: 'Design consultancy services',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '79416000',
                name: 'Public relations services',
                countWithChildren: 1,
                children: [
                  {
                    code: '79416200',
                    name: 'Public relations consultancy services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '79418000',
                name: 'Procurement consultancy services',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '79420000',
            name: 'Management-related services',
            countWithChildren: 4,
            children: [
              {
                code: '79421000',
                name:
                  'Project-management services other than for construction work',
                countWithoutChildren: 4,
                countWithChildren: 4,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '79500000',
        name: 'Office-support services',
        countWithChildren: 8,
        children: [
          {
            code: '79520000',
            name: 'Reprographic services',
            countWithChildren: 1,
            children: [
              {
                code: '79521000',
                name: 'Photocopying services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '79530000',
            name: 'Translation services',
            countWithoutChildren: 3,
            countWithChildren: 3,
            children: [],
          },
          {
            code: '79540000',
            name: 'Interpretation services',
            countWithoutChildren: 3,
            countWithChildren: 3,
            children: [],
          },
          {
            code: '79560000',
            name: 'Filing services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '79600000',
        name: 'Recruitment services',
        countWithoutChildren: 6,
        countWithChildren: 21,
        children: [
          {
            code: '79610000',
            name: 'Placement services of personnel',
            countWithChildren: 1,
            children: [
              {
                code: '79611000',
                name: 'Job search services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '79620000',
            name: 'Supply services of personnel including temporary staff',
            countWithoutChildren: 6,
            countWithChildren: 11,
            children: [
              {
                code: '79624000',
                name: 'Supply services of nursing personnel',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '79625000',
                name: 'Supply services of medical personnel',
                countWithoutChildren: 4,
                countWithChildren: 4,
                children: [],
              },
            ],
          },
          {
            code: '79630000',
            name: 'Personnel services except placement and supply services',
            countWithChildren: 3,
            children: [
              {
                code: '79634000',
                name: 'Career guidance services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '79635000',
                name: 'Assessment centre services for recruitment',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '79700000',
        name: 'Investigation and security services',
        countWithChildren: 11,
        children: [
          {
            code: '79710000',
            name: 'Security services',
            countWithoutChildren: 4,
            countWithChildren: 11,
            children: [
              {
                code: '79711000',
                name: 'Alarm-monitoring services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '79713000',
                name: 'Guard services',
                countWithoutChildren: 5,
                countWithChildren: 5,
                children: [],
              },
              {
                code: '79714000',
                name: 'Surveillance services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '79800000',
        name: 'Printing and related services',
        countWithoutChildren: 2,
        countWithChildren: 4,
        children: [
          {
            code: '79820000',
            name: 'Services related to printing',
            countWithChildren: 2,
            children: [
              {
                code: '79822000',
                name: 'Composition services',
                countWithChildren: 1,
                children: [
                  {
                    code: '79822500',
                    name: 'Graphic design services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '79824000',
                name: 'Printing and distribution services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '79900000',
        name: 'Miscellaneous business and business-related services',
        countWithChildren: 5,
        children: [
          {
            code: '79930000',
            name: 'Specialty design services',
            countWithChildren: 1,
            children: [
              {
                code: '79934000',
                name: 'Furniture design services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '79940000',
            name: 'Collection agency services',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '79941000',
                name: 'Toll-collection services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '79990000',
            name: 'Miscellaneous business-related services',
            countWithChildren: 2,
            children: [
              {
                code: '79997000',
                name: 'Business travel services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '79999000',
                name: 'Scanning and invoicing services',
                countWithChildren: 1,
                children: [
                  {
                    code: '79999100',
                    name: 'Scanning services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '80000000',
    name: 'Education and training services',
    countWithoutChildren: 1,
    countWithChildren: 12,
    children: [
      {
        code: '80100000',
        name: 'Primary education services',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
      {
        code: '80200000',
        name: 'Secondary education services',
        countWithoutChildren: 1,
        countWithChildren: 1,
        children: [],
      },
      {
        code: '80300000',
        name: 'Higher education services',
        countWithChildren: 1,
        children: [
          {
            code: '80320000',
            name: 'Medical education services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '80400000',
        name: 'Adult and other education services',
        countWithoutChildren: 1,
        countWithChildren: 7,
        children: [
          {
            code: '80410000',
            name: 'Various school services',
            countWithChildren: 1,
            children: [
              {
                code: '80411000',
                name: 'Driving-school services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '80420000',
            name: 'E-learning services',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
          {
            code: '80430000',
            name: 'Adult-education services at university level',
            countWithoutChildren: 3,
            countWithChildren: 3,
            children: [],
          },
        ],
      },
      {
        code: '80500000',
        name: 'Training services',
        countWithChildren: 1,
        children: [
          {
            code: '80530000',
            name: 'Vocational training services',
            countWithChildren: 1,
            children: [
              {
                code: '80532000',
                name: 'Management training services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '85000000',
    name: 'Health and social work services',
    countWithoutChildren: 3,
    countWithChildren: 21,
    children: [
      {
        code: '85100000',
        name: 'Health services',
        countWithChildren: 9,
        children: [
          {
            code: '85140000',
            name: 'Miscellaneous health services',
            countWithoutChildren: 2,
            countWithChildren: 9,
            children: [
              {
                code: '85145000',
                name: 'Services provided by medical laboratories',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '85147000',
                name: 'Company health services',
                countWithoutChildren: 6,
                countWithChildren: 6,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '85200000',
        name: 'Veterinary services',
        countWithoutChildren: 2,
        countWithChildren: 2,
        children: [],
      },
      {
        code: '85300000',
        name: 'Social work and related services',
        countWithChildren: 7,
        children: [
          {
            code: '85310000',
            name: 'Social work services',
            countWithChildren: 6,
            children: [
              {
                code: '85311000',
                name: 'Social work services with accommodation',
                countWithoutChildren: 2,
                countWithChildren: 6,
                children: [
                  {
                    code: '85311100',
                    name: 'Welfare services for the elderly',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '85311300',
                    name: 'Welfare services for children and young people',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '85320000',
            name: 'Social services',
            countWithChildren: 1,
            children: [
              {
                code: '85323000',
                name: 'Community health services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '90000000',
    name: 'Sewage, refuse, cleaning and environmental services',
    countWithChildren: 96,
    children: [
      {
        code: '90400000',
        name: 'Sewage services',
        countWithChildren: 2,
        children: [
          {
            code: '90460000',
            name: 'Cesspool or septic tank emptying services',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
        ],
      },
      {
        code: '90500000',
        name: 'Refuse and waste related services',
        countWithoutChildren: 9,
        countWithChildren: 38,
        children: [
          {
            code: '90510000',
            name: 'Refuse disposal and treatment',
            countWithoutChildren: 12,
            countWithChildren: 28,
            children: [
              {
                code: '90511000',
                name: 'Refuse collection services',
                countWithoutChildren: 4,
                countWithChildren: 5,
                children: [
                  {
                    code: '90511400',
                    name: 'Paper collecting services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '90512000',
                name: 'Refuse transport services',
                countWithoutChildren: 6,
                countWithChildren: 6,
                children: [],
              },
              {
                code: '90513000',
                name:
                  'Non-hazardous refuse and waste treatment and disposal services',
                countWithChildren: 5,
                children: [
                  {
                    code: '90513600',
                    name: 'Sludge removal services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '90513700',
                    name: 'Sludge transport services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '90513800',
                    name: 'Sludge treatment services',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '90520000',
            name: 'Radioactive-, toxic-, medical- and hazardous waste services',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '90600000',
        name:
          'Cleaning and sanitation services in urban or rural areas, and related services',
        countWithChildren: 21,
        children: [
          {
            code: '90610000',
            name: 'Street-cleaning and sweeping services',
            countWithChildren: 1,
            children: [
              {
                code: '90612000',
                name: 'Street-sweeping services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '90620000',
            name: 'Snow-clearing services',
            countWithoutChildren: 18,
            countWithChildren: 18,
            children: [],
          },
          {
            code: '90670000',
            name:
              'Disinfecting and exterminating services in urban or rural areas',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
        ],
      },
      {
        code: '90700000',
        name: 'Environmental services',
        countWithoutChildren: 2,
        countWithChildren: 12,
        children: [
          {
            code: '90710000',
            name: 'Environmental management',
            countWithoutChildren: 1,
            countWithChildren: 9,
            children: [
              {
                code: '90711000',
                name:
                  'Environmental impact assessment other than for construction',
                countWithChildren: 7,
                children: [
                  {
                    code: '90711500',
                    name:
                      'Environmental monitoring other than for construction',
                    countWithoutChildren: 7,
                    countWithChildren: 7,
                    children: [],
                  },
                ],
              },
              {
                code: '90713000',
                name: 'Environmental issues consultancy services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '90730000',
            name: 'Pollution tracking and monitoring and rehabilitation',
            countWithChildren: 1,
            children: [
              {
                code: '90733000',
                name: 'Services related to water pollution',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '90900000',
        name: 'Cleaning and sanitation services',
        countWithoutChildren: 4,
        countWithChildren: 23,
        children: [
          {
            code: '90910000',
            name: 'Cleaning services',
            countWithoutChildren: 5,
            countWithChildren: 18,
            children: [
              {
                code: '90911000',
                name: 'Accommodation, building and window cleaning services',
                countWithoutChildren: 11,
                countWithChildren: 12,
                children: [
                  {
                    code: '90911300',
                    name: 'Window-cleaning services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '90919000',
                name: 'Office, school and office equipment cleaning services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '90920000',
            name: 'Facility related sanitation services',
            countWithChildren: 1,
            children: [
              {
                code: '90922000',
                name: 'Pest-control services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '92000000',
    name: 'Recreational, cultural and sporting services',
    countWithChildren: 14,
    children: [
      {
        code: '92100000',
        name: 'Motion picture and video services',
        countWithoutChildren: 2,
        countWithChildren: 4,
        children: [
          {
            code: '92110000',
            name:
              'Motion picture and video tape production and related services',
            countWithChildren: 2,
            children: [
              {
                code: '92111000',
                name: 'Motion picture and video production services',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '92200000',
        name: 'Radio and television services',
        countWithChildren: 3,
        children: [
          {
            code: '92220000',
            name: 'Television services',
            countWithoutChildren: 2,
            countWithChildren: 3,
            children: [
              {
                code: '92224000',
                name: 'Digital television',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '92300000',
        name: 'Entertainment services',
        countWithChildren: 2,
        children: [
          {
            code: '92350000',
            name: 'Gambling and betting services',
            countWithChildren: 1,
            children: [
              {
                code: '92351000',
                name: 'Gambling services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '92370000',
            name: 'Sound technician',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '92400000',
        name: 'News-agency services',
        countWithoutChildren: 2,
        countWithChildren: 2,
        children: [],
      },
      {
        code: '92500000',
        name: 'Library, archives, museums and other cultural services',
        countWithChildren: 1,
        children: [
          {
            code: '92520000',
            name:
              'Museum services and preservation services of historical sites and buildings',
            countWithChildren: 1,
            children: [
              {
                code: '92521000',
                name: 'Museum services',
                countWithChildren: 1,
                children: [
                  {
                    code: '92521100',
                    name: 'Museum-exhibition services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '92600000',
        name: 'Sporting services',
        countWithChildren: 2,
        children: [
          {
            code: '92610000',
            name: 'Sports facilities operation services',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: '98000000',
    name: 'Other community, social and personal services',
    countWithoutChildren: 1,
    countWithChildren: 20,
    children: [
      {
        code: '98300000',
        name: 'Miscellaneous services',
        countWithChildren: 19,
        children: [
          {
            code: '98310000',
            name: 'Washing and dry-cleaning services',
            countWithoutChildren: 10,
            countWithChildren: 11,
            children: [
              {
                code: '98311000',
                name: 'Laundry-collection services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '98350000',
            name: 'Civic-amenity services',
            countWithChildren: 1,
            children: [
              {
                code: '98351000',
                name: 'Car park management services',
                countWithChildren: 1,
                children: [
                  {
                    code: '98351100',
                    name: 'Car park services',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '98360000',
            name: 'Marine services',
            countWithChildren: 1,
            children: [
              {
                code: '98363000',
                name: 'Diving services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '98390000',
            name: 'Other services',
            countWithoutChildren: 1,
            countWithChildren: 6,
            children: [
              {
                code: '98392000',
                name: 'Relocation services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '98394000',
                name: 'Upholstering services',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '98395000',
                name: 'Locksmith services',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '03000000',
    name: 'Agricultural, farming, fishing, forestry and related products',
    countWithoutChildren: 2,
    countWithChildren: 6,
    children: [
      {
        code: '03300000',
        name: 'Farming, hunting and fishing products',
        countWithChildren: 1,
        children: [
          {
            code: '03310000',
            name: 'Fish, crustaceans and aquatic products',
            countWithChildren: 1,
            children: [
              {
                code: '03311000',
                name: 'Fish',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '03200000',
        name: 'Cereals, potatoes, vegetables, fruits and nuts',
        countWithChildren: 2,
        children: [
          {
            code: '03220000',
            name: 'Vegetables, fruits and nuts',
            countWithChildren: 2,
            children: [
              {
                code: '03221000',
                name: 'Vegetables',
                countWithChildren: 2,
                children: [
                  {
                    code: '03221200',
                    name: 'Fruit vegetables',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        code: '03100000',
        name: 'Agricultural and horticultural products',
        countWithChildren: 1,
        children: [
          {
            code: '03120000',
            name: 'Horticultural and nursery products',
            countWithChildren: 1,
            children: [
              {
                code: '03121000',
                name: 'Horticultural products',
                countWithChildren: 1,
                children: [
                  {
                    code: '03121200',
                    name: 'Cut flowers',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '03121210',
                        name: 'Floral arrangements',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: '09000000',
    name: 'Petroleum products, fuel, electricity and other sources of energy',
    countWithoutChildren: 1,
    countWithChildren: 31,
    children: [
      {
        code: '09100000',
        name: 'Fuels',
        countWithoutChildren: 4,
        countWithChildren: 18,
        children: [
          {
            code: '09110000',
            name: 'Solid fuels',
            countWithChildren: 2,
            children: [
              {
                code: '09111000',
                name: 'Coal and coal-based fuels',
                countWithChildren: 2,
                children: [
                  {
                    code: '09111400',
                    name: 'Wood fuels',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            code: '09130000',
            name: 'Petroleum and distillates',
            countWithoutChildren: 1,
            countWithChildren: 12,
            children: [
              {
                code: '09135000',
                name: 'Fuel oils',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '09135100',
                    name: 'Heating oil',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '09134000',
                name: 'Gas oils',
                countWithChildren: 7,
                children: [
                  {
                    code: '09134200',
                    name: 'Diesel fuel',
                    countWithoutChildren: 6,
                    countWithChildren: 7,
                    children: [
                      {
                        code: '09134230',
                        name: 'Biodiesel',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                code: '09132000',
                name: 'Petrol',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '09300000',
        name: 'Electricity, heating, solar and nuclear energy',
        countWithoutChildren: 2,
        countWithChildren: 12,
        children: [
          {
            code: '09310000',
            name: 'Electricity',
            countWithoutChildren: 10,
            countWithChildren: 10,
            children: [],
          },
        ],
      },
    ],
  },
]

export default structure
