const structure = [
  {
    main: 'IT',
    children: [
      {
        code: '48000000',
        name: 'Programvare og informasjonssystemer',
        countWithoutChildren: 11,
        countWithChildren: 24,
        children: [
          {
            code: '48100000',
            name: 'Bransjespesifikk programvare',
            countWithChildren: 2,
            children: [
              {
                code: '48110000',
                name: 'Programvare for salg (POS)',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '48170000',
                name: 'Compliance-programvare',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '48200000',
            name: 'Nettverks, internett og intranett programvare',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '48210000',
                name: 'Programvare for nettverkstilkopling',
                countWithChildren: 1,
                children: [
                  {
                    code: '48219000',
                    name: 'Diverse nettverksprogramvare',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '48219300',
                        name: 'Administrasjonsprogramvare',
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
              'Programvare for dokumentopprettelse, tegning, bilde, tidsplanlegging og produktivitet',
            countWithChildren: 2,
            children: [
              {
                code: '48320000',
                name: 'Programvare for tegning eller bildehåndtering',
                countWithChildren: 2,
                children: [
                  {
                    code: '48328000',
                    name: 'Programvare for bildebehandling',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '48329000',
                    name: 'Bildebehandlings- og arkiveringssystem',
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
            name: 'Programvare relatert til forretningsvirksomhet',
            countWithoutChildren: 2,
            countWithChildren: 3,
            children: [
              {
                code: '48460000',
                name:
                  'Analytiske, vitenskapelige, matematiske eller prognose programmervare',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '48600000',
            name: 'Operativsystemer og programvare for databaser',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '48610000',
                name: 'Databasesystemer',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '48700000',
            name: 'Programvare verktøy',
            countWithChildren: 2,
            children: [
              {
                code: '48710000',
                name: 'Programvare for sikkerhetskopiering og gjennopprettning',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '48730000',
                name: 'Sikkerhetsprogramvare',
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
        name: 'Installasjonstjenester (bortsett fra programvare)',
        countWithoutChildren: 1,
        countWithChildren: 8,
        children: [
          {
            code: '51100000',
            name: 'Installasjon av elektrisk og mekanisk utstyr',
            countWithoutChildren: 1,
            countWithChildren: 5,
            children: [
              {
                code: '51110000',
                name: 'Installasjon av elektrisk utstyr',
                countWithoutChildren: 4,
                countWithChildren: 4,
                children: [],
              },
            ],
          },
          {
            code: '51300000',
            name: 'Installasjon av kommunikasjonsutstyr',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '51700000',
            name: 'Installasjon av brannsikringsutstyrssystem',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '72000000',
        name:
          'Datatjenester: rådgivning, programvareutvikling, internett og systemstøtte ',
        countWithoutChildren: 27,
        countWithChildren: 113,
        children: [
          {
            code: '72200000',
            name: 'Programmering av software og rådgivning',
            countWithoutChildren: 3,
            countWithChildren: 71,
            children: [
              {
                code: '72210000',
                name: 'Programmering i forbindelse med programvarepakker',
                countWithChildren: 13,
                children: [
                  {
                    code: '72212000',
                    name:
                      'Programmering i forbindelse med applikasjonsprogrammer',
                    countWithChildren: 13,
                    children: [
                      {
                        code: '72212100',
                        name:
                          'Utviklingstjenester for Bransjespesifikk programvare',
                        countWithChildren: 3,
                        children: [
                          {
                            code: '72212190',
                            name:
                              'Utviklingstjenester relatert til Undervisningsprogramvare',
                            countWithoutChildren: 3,
                            countWithChildren: 3,
                            children: [],
                          },
                        ],
                      },
                      {
                        code: '72212200',
                        name:
                          'Utviklingstjenester relatert til Nettverks, internett og intranett programvare',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '72212220',
                            name:
                              'Utviklingstjenester relatert til Programvare for internett og intranett',
                            countWithoutChildren: 1,
                            countWithChildren: 1,
                            children: [],
                          },
                        ],
                      },
                      {
                        code: '72212300',
                        name:
                          'Utviklingstjenester relatert til Programvare for dokumentopprettelse, tegning, bilde, tidsplanlegging og produktivitet',
                        countWithChildren: 5,
                        children: [
                          {
                            code: '72212310',
                            name:
                              'Utviklingstjenester relatert til Programvare for dokumentfremstilling',
                            countWithChildren: 2,
                            children: [
                              {
                                code: '72212311',
                                name:
                                  'Utviklingstjenester relatert til Programvare for dokumentadministrasjon',
                                count: 2,
                              },
                            ],
                          },
                          {
                            code: '72212320',
                            name:
                              'Utviklingstjenester relatert til Programvare for tegning eller bildehåndtering',
                            countWithChildren: 2,
                            children: [
                              {
                                code: '72212326',
                                name:
                                  'Utviklingstjenester relatert til Programvare for kartlegging',
                                count: 1,
                              },
                              {
                                code: '72212327',
                                name:
                                  'Utviklingstjenester relatert til Digitalt kartleggingssystem',
                                count: 1,
                              },
                            ],
                          },
                          {
                            code: '72212330',
                            name:
                              'Utviklingstjenester relatert til Tidsplanleggings- og produksjonsprogramvare',
                            countWithChildren: 1,
                            children: [
                              {
                                code: '72212332',
                                name:
                                  'Utviklingstjenester relatert til Tidsplanleggingsprogramvare',
                                count: 1,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        code: '72212400',
                        name:
                          'Utviklingstjenester relatert til Programvare til forretningsvirksomhet',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '72212440',
                            name:
                              'Utviklingstjenester relatert til Programvare for økonomianalyse og regnskap',
                            countWithChildren: 1,
                            children: [
                              {
                                code: '72212441',
                                name:
                                  'Utviklingstjenester relatert til Programvare for økonomianalyse ',
                                count: 1,
                              },
                            ],
                          },
                          {
                            code: '72212450',
                            name:
                              'Utviklingstjenester relatert til Programvare for tidsregistrering og  personaladministrasjon',
                            countWithoutChildren: 1,
                            countWithChildren: 1,
                            children: [],
                          },
                        ],
                      },
                      {
                        code: '72212700',
                        name:
                          'Programvare verktøy relatert til utviklingstjenester',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '72212770',
                            name:
                              'Utviklingstjenester relatert til Generell programvarepakke, datakomprimeringsredskap og programvare for skrivere',
                            countWithChildren: 1,
                            children: [
                              {
                                code: '72212772',
                                name:
                                  'Utviklingstjenester relatert til Programvare for skrivere',
                                count: 1,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        code: '72212900',
                        name:
                          'Utviklingstjenester relatert til Diverse programvarepakker og computersystemer',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '72212940',
                            name:
                              'Utviklingstjenester relatert til Programvare til mønsterdesign og kalenderfunksjon',
                            countWithChildren: 1,
                            children: [
                              {
                                code: '72212941',
                                name:
                                  'Utviklingstjenester relatert til Programvare til mønsterdesign',
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
                name: 'Systemtjenester og tekniske konsulenttjenester',
                countWithoutChildren: 15,
                countWithChildren: 25,
                children: [
                  {
                    code: '72222000',
                    name:
                      'Informasjonssystemer eller teknologistrategisk gjennomsyn- og planleggingstjenester',
                    countWithChildren: 4,
                    children: [
                      {
                        code: '72222300',
                        name: 'IT-tjenester',
                        countWithoutChildren: 4,
                        countWithChildren: 4,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '72224000',
                    name:
                      'Konsulentvirksomhet i forbindelse med prosjektstyring',
                    countWithoutChildren: 4,
                    countWithChildren: 5,
                    children: [
                      {
                        code: '72224100',
                        name:
                          'Planleggingsarbeid av implementering av et system',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '72225000',
                    name: 'Vurdering og gjennomgang av systemkvalitetssikring',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '72230000',
                name: 'Utvikling av kundespesifisert programvare',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
              {
                code: '72250000',
                name: 'System- og støttetjenester',
                countWithoutChildren: 1,
                countWithChildren: 3,
                children: [
                  {
                    code: '72252000',
                    name: 'Edb-arkivering',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '72260000',
                name: 'Programvarerelaterte tjenester',
                countWithoutChildren: 2,
                countWithChildren: 25,
                children: [
                  {
                    code: '72262000',
                    name: 'Programvareutvikling',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '72266000',
                    name: 'Konsulentvirksomhet i forbindelse med programvare',
                    countWithoutChildren: 15,
                    countWithChildren: 15,
                    children: [],
                  },
                  {
                    code: '72267000',
                    name:
                      'Programvareutvikling for vedlikeholds- og reperasjonstjenester ',
                    countWithChildren: 3,
                    children: [
                      {
                        code: '72267100',
                        name: 'Vedlikehold av IT-programvare',
                        countWithoutChildren: 3,
                        countWithChildren: 3,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '72268000',
                    name: 'Levering av programvare',
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
            name: 'Datatjenester',
            countWithoutChildren: 2,
            countWithChildren: 6,
            children: [
              {
                code: '72310000',
                name: 'Databehandling',
                countWithoutChildren: 1,
                countWithChildren: 4,
                children: [
                  {
                    code: '72314000',
                    name: 'Innsamling og bearbeiding av data',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '72315000',
                    name: 'Datanettstyring og støttevirksomhet',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '72315200',
                        name: 'Drift av datanettverk',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '72318000',
                    name: 'Dataoverføring',
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
            name: 'Internett tjenester',
            countWithChildren: 3,
            children: [
              {
                code: '72410000',
                name: 'Tjenesteleverandør tjenester',
                countWithChildren: 3,
                children: [
                  {
                    code: '72413000',
                    name: 'Designtjenester for nettsider (World wide web)',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '72415000',
                    name:
                      'Drift- og vertstjenester for nettsider (World wide web)',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '72416000',
                    name: 'Leverandør av applikasjonstjenester',
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
            name: 'Datamaskinrelaterte tjenester',
            countWithChildren: 3,
            children: [
              {
                code: '72510000',
                name: 'Datamaskinrelaterte driftstjenester',
                countWithoutChildren: 2,
                countWithChildren: 3,
                children: [
                  {
                    code: '72514000',
                    name: 'Drift av dataanlegg',
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
            name: 'Datamaskin nettverktjenester',
            countWithChildren: 2,
            children: [
              {
                code: '72720000',
                name: 'WAN-tjenester, fjernnett',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '72900000',
            name:
              'Tjenester i forbindelse med Back-up av data og Konvertering av datamaskinkatalog',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
    ],
  },
  {
    main: 'Bygg og anlegg',
    children: [
      {
        code: '14000000',
        name: 'Gruvedrift, grunnmetaller og relaterte produkter',
        countWithChildren: 10,
        children: [
          {
            code: '14200000',
            name: 'Sand og leire',
            countWithChildren: 7,
            children: [
              {
                code: '14210000',
                name: 'Grus, sand, knuste stein og tilslagsmaterialer',
                countWithoutChildren: 5,
                countWithChildren: 7,
                children: [
                  {
                    code: '14212000',
                    name:
                      'Korn, steinflis, pulver av stein, småstein, grus, knust stein, steinblandinger, sand- og grusblandinger og andre tilslagsmaterialer',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '14212300',
                        name: 'Knust stein',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '14213000',
                    name: 'Makadam, asfalt og asfaltsand',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '14213200',
                        name: 'Asfalt',
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
            name:
              'Produkter relatert til gruve- og bergverksdrift og steinbrudd',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '14600000',
            name: 'Metallmalmer og legeringer',
            countWithChildren: 2,
            children: [
              {
                code: '14620000',
                name: 'Legeringer',
                countWithChildren: 2,
                children: [
                  {
                    code: '14622000',
                    name: 'Stål',
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
        code: '16000000',
        name: 'Landbruksmaskiner',
        countWithChildren: 2,
        children: [
          {
            code: '16300000',
            name: 'Høstmaskiner',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '16600000',
            name: 'Spesialmaskiner til landbruk eller skogbruk',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '42000000',
        name: 'Industrimaskiner',
        countWithChildren: 13,
        children: [
          {
            code: '42100000',
            name: 'Maskiner til produksjon og utnyttelse av mekanisk energi',
            countWithChildren: 2,
            children: [
              {
                code: '42120000',
                name: 'Pumper og kompressorer',
                countWithChildren: 2,
                children: [
                  {
                    code: '42122000',
                    name: 'Pumper',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '42122200',
                        name:
                          'Fortrengningspumper med stempel eller membran til væsker',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '42122220',
                            name: 'Avløpspumper',
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
            name: 'Kjøle- og ventilasjonsutstyr',
            countWithChildren: 2,
            children: [
              {
                code: '42510000',
                name:
                  'Varmevekslere, luftkondisjonerings- og kjølingsutstyr og filtreringsmaskiner',
                countWithChildren: 2,
                children: [
                  {
                    code: '42514000',
                    name:
                      'Maskiner og apparater til filtrering eller rensing av gasser',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '42514300',
                        name: 'Filtreringsapparater',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '42514310',
                            name: 'Luftfiltre',
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
            name: 'Verktøysmaskiner',
            countWithoutChildren: 1,
            countWithChildren: 3,
            children: [
              {
                code: '42620000',
                name: 'Dreiebenker, bore- og fresemaskiner',
                countWithChildren: 1,
                children: [
                  {
                    code: '42623000',
                    name: 'Fresemaskiner',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '42630000',
                name: 'Verktøymaskiner til bearbeiding av metall',
                countWithChildren: 1,
                children: [
                  {
                    code: '42636000',
                    name: 'Presser',
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
            name: 'Diverse maskineri til generelt og spesielt bruk',
            countWithChildren: 6,
            children: [
              {
                code: '42910000',
                name:
                  'Destillasjons-, filtrerings- eller rektifikasjonsapparater',
                countWithChildren: 3,
                children: [
                  {
                    code: '42912000',
                    name:
                      'Maskiner og apparater til filtrering eller rensing av væsker',
                    countWithChildren: 3,
                    children: [
                      {
                        code: '42912300',
                        name:
                          'Maskiner og apparater til filtrering eller rensing av vann',
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
                  'Maskiner til rensing av flasker, pakking, veiing og sprøyting',
                countWithChildren: 1,
                children: [
                  {
                    code: '42921000',
                    name:
                      'Maskiner til rensing, påfylling, pakking eller emballering av flasker eller andre beholdere',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '42921300',
                        name: 'Pakke- og emballeringsmaskiner',
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
                  'Kommando- og kontrollsystem, trykking, grafikk, kontorautomasjon og informasjonsbehandlingsutstyr',
                countWithChildren: 1,
                children: [
                  {
                    code: '42961000',
                    name: 'Kommando- og kontrollsystem',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '42961100',
                        name: 'Adgangskontrollsystemer',
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
                name: 'Diverse spesialmaskiner',
                countWithChildren: 1,
                children: [
                  {
                    code: '42996000',
                    name: 'Maskiner for avløpsrensing',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '42996100',
                        name: 'Kverner',
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
        name: 'Maskineri til mining, steinbryting, konstruksjonsutstyr',
        countWithChildren: 5,
        children: [
          {
            code: '43200000',
            name: 'Jordflyttings- og gravemaskiner samt tilhørende deler',
            countWithoutChildren: 1,
            countWithChildren: 5,
            children: [
              {
                code: '43220000',
                name: 'Veiskraper og planeringsmaskiner',
                countWithChildren: 1,
                children: [
                  {
                    code: '43221000',
                    name: 'Veihøvler',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '43260000',
                name: 'Gravemaskiner og lastemaskiner samt gruvemaskiner',
                countWithoutChildren: 1,
                countWithChildren: 3,
                children: [
                  {
                    code: '43261000',
                    name: 'Gravemaskiner',
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
          'Konstruksjonsstrukturer og materiale; reserveprodukter til konstruksjon (bortsett fra elektriske apparater)',
        countWithChildren: 20,
        children: [
          {
            code: '44100000',
            name:
              'Materialer til bygge- og anleggsarbeid og tilknyttede gjenstander',
            countWithoutChildren: 2,
            countWithChildren: 9,
            children: [
              {
                code: '44110000',
                name: 'Bygningsmaterialer',
                countWithoutChildren: 3,
                countWithChildren: 6,
                children: [
                  {
                    code: '44111000',
                    name: 'Byggematerialer',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                  {
                    code: '44115000',
                    name: 'Armatur til bygninger',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '44115200',
                        name:
                          'Material til sanitæranlegg og varmeinstallasjoner',
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
                name:
                  'Rørledning, rørsystemer, rør, fôringsrør, rørledning systemer og beslektede gjenstander',
                countWithChildren: 1,
                children: [
                  {
                    code: '44162000',
                    name: 'Rørsystem',
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
            name: 'Strukturprodukter',
            countWithChildren: 3,
            children: [
              {
                code: '44210000',
                name: 'Strukturer og deler av strukturer',
                countWithChildren: 3,
                children: [
                  {
                    code: '44211000',
                    name: 'Prefabrikkerte bygninger',
                    countWithoutChildren: 1,
                    countWithChildren: 3,
                    children: [
                      {
                        code: '44211100',
                        name: 'Moduloppbygde og mobile brakker',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '44211500',
                        name: 'Veksthus',
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
            name: 'Diverse fabrikkerte produkter og tilbehør',
            countWithChildren: 1,
            children: [
              {
                code: '44420000',
                name: 'Varer og artikler brukt i konstruksjon',
                countWithChildren: 1,
                children: [
                  {
                    code: '44423000',
                    name: 'Diverse artikler',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '44423400',
                        name: 'Skilt og tilbehør',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '44423460',
                            name: 'Adresseskilt',
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
            name:
              'Verktøy, låser, nøkler, hengsler, fester, lenker og fjører. ',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '44510000',
                name: 'Verktøy',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '44600000',
            name:
              'Tanker, reservoarer og beholdere; sentralvarmeradiatorer og varmtvannstanker',
            countWithChildren: 5,
            children: [
              {
                code: '44610000',
                name: 'Tanker, reservoarer, beholdere og trykktanker',
                countWithChildren: 5,
                children: [
                  {
                    code: '44613000',
                    name: 'Store beholdere',
                    countWithChildren: 4,
                    children: [
                      {
                        code: '44613200',
                        name: 'Kjølecontainere',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '44613300',
                        name: 'Standard fraktcontainere',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '44613700',
                        name: 'Avfallscontainere',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '44617000',
                    name: 'Bokser',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '44617100',
                        name: 'Kartonger',
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
        name: 'Bygge- og anleggsvirksomhet',
        countWithoutChildren: 38,
        countWithChildren: 101,
        children: [
          {
            code: '45100000',
            name: 'Forberedende anleggsarbeid',
            countWithChildren: 2,
            children: [
              {
                code: '45110000',
                name: 'Nedrivning av bygninger og jordarbeid',
                countWithChildren: 2,
                children: [
                  {
                    code: '45111000',
                    name: 'Nedrivning, forbereding og rydding av byggeplass',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45111200',
                        name: 'Forbereding og rydding av byggeplass',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '45112000',
                    name: 'Utgravning og fjerning av jord',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45112700',
                        name: 'Arbeid i forbindelse med landskapsarkitektur',
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
              'Deler av eller komplette byggekonstruksjoner samt anleggsarbeider',
            countWithoutChildren: 2,
            countWithChildren: 38,
            children: [
              {
                code: '45210000',
                name: 'Byggearbeid',
                countWithoutChildren: 1,
                countWithChildren: 23,
                children: [
                  {
                    code: '45212000',
                    name:
                      'Bygge- og anleggsarbeid på bygninger knyttet til fritid, sport, kultur, overnatting og restauranter',
                    countWithChildren: 6,
                    children: [
                      {
                        code: '45212200',
                        name:
                          'Bygge- og anleggsarbeid i forbindelse med idrettsanlegg',
                        countWithoutChildren: 1,
                        countWithChildren: 5,
                        children: [
                          {
                            code: '45212210',
                            name:
                              'Bygge- og anleggsarbeid i forbindelse med Idrettsanlegg til en enkelt sportsgren',
                            countWithChildren: 1,
                            children: [
                              {
                                code: '45212212',
                                name:
                                  'Byggearbeid i forbindelse med svømmebassenger',
                                count: 1,
                              },
                            ],
                          },
                          {
                            code: '45212220',
                            name:
                              'Byggningsarbeid i forbindelse med flerbruks sportsfasiliteter',
                            countWithChildren: 3,
                            children: [
                              {
                                code: '45212224',
                                name:
                                  'Byggningsarbeid i forbindelse med Stadion',
                                count: 1,
                              },
                              {
                                code: '45212225',
                                name:
                                  'Byggningsarbeid i forbindelse med Idrettshall',
                                count: 2,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        code: '45212300',
                        name:
                          'Arbeid i forbindelse med kunst- og kulturbygninger',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '45212360',
                            name:
                              'Bygge- og anleggsarbeid i forbindelse med Bygninger til religiøse formål',
                            countWithChildren: 1,
                            children: [
                              {
                                code: '45212361',
                                name:
                                  'Bygge- og anleggsarbeid i forbindelse med Kirke',
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
                      'Bygge- og anleggsarbeid i forbindelse med bygninger knyttet til utdannelse og forskning',
                    countWithChildren: 10,
                    children: [
                      {
                        code: '45214100',
                        name:
                          'Bygge- og anleggsarbeid i forbindelse med barnehager',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '45214200',
                        name:
                          'Bygge- og anleggsarbeid i forbindelse med skolebygninger',
                        countWithoutChildren: 7,
                        countWithChildren: 8,
                        children: [
                          {
                            code: '45214210',
                            name:
                              'Bygge- og anleggsarbeid i forbindelse med Grunnskole',
                            countWithoutChildren: 1,
                            countWithChildren: 1,
                            children: [],
                          },
                        ],
                      },
                      {
                        code: '45214400',
                        name:
                          'Bygge- og anleggsarbeid i forbindelse med universitetsbygninger',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '45214420',
                            name:
                              'Bygge- og anleggsarbeid i forbindelse med Auditorium',
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
                      'Bygge- og anleggsarbeid i forbindelse med bygninger til helse- og sosialetat, krematorier og offentlige toaletter',
                    countWithChildren: 4,
                    children: [
                      {
                        code: '45215100',
                        name:
                          'Bygge- og anleggsarbeid i forbindelse med bygninger til helsevesenet',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '45215200',
                        name:
                          'Bygge- og anleggsarbeid i forbindelse med bygninger til sosialomsorg',
                        countWithoutChildren: 1,
                        countWithChildren: 3,
                        children: [
                          {
                            code: '45215220',
                            name:
                              'Bygge- og anleggsarbeid i forbindelse med sosial bygninger unntatt omsorgs- og pleieboliger',
                            countWithChildren: 2,
                            children: [
                              {
                                code: '45215221',
                                name:
                                  'Bygge- og anleggsarbeid i forbindelse med Dagsenter',
                                count: 1,
                              },
                              {
                                code: '45215222',
                                name:
                                  'Bygge- og anleggsarbeid i forbindelse med Administrasjonssenter',
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
                      'Bygge- og anleggsarbeid i forbindelse med bygninger for politi eller beredskapstjenester og for militære bygninger',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '45216100',
                        name:
                          'Bygge- og anleggsarbeid i forbindelse med bygninger for politi eller beredskapstjenester',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '45216120',
                            name:
                              'Bygge- og anleggsarbeid i forbindelse med bygninger til beredskapstjenester',
                            countWithChildren: 2,
                            children: [
                              {
                                code: '45216121',
                                name:
                                  'Bygge- og anleggsarbeid i forbindelse med Brannstasjon',
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
                name: 'Ingeniør- og byggningsarbeid',
                countWithChildren: 3,
                children: [
                  {
                    code: '45222000',
                    name:
                      'Byggearbeid i forbindelse med ingeniørarbeid, unntatt bruer, tunneler, sjakter og underganger',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '45222100',
                        name:
                          'Bygge- og anleggsarbeid i forbindelse med Avfallsbehandlingsanlegg',
                        countWithoutChildren: 1,
                        countWithChildren: 2,
                        children: [
                          {
                            code: '45222110',
                            name:
                              'Bygge- og anleggsarbeid i forbindelse med Avfallsdeponi',
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
                    name:
                      'Bygge- og anleggsarbeid i forbindelse med Konstruksjoner',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45223800',
                        name:
                          'Montering og oppføring av prefabrikkerte konstruksjoner',
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
                  'Bygge- og anleggsarbeid i forbindelse med rørledning-, kommunikasjons- og kraftlinjer for motorveier, veier, flyplasser og jernbaner; planeringsarbeid',
                countWithChildren: 7,
                children: [
                  {
                    code: '45231000',
                    name:
                      'Bygge- og anleggsarbeid i forbindelse med rørledning-, kommunikasjons- og kraftlinjer',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45231500',
                        name:
                          'Bygge- og anleggsarbeid i forbindelse med trykkluftledninger',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '45231510',
                            name:
                              'Arbeid i forbindelse med trykkluftledninger til postbruk',
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
                    name:
                      'Bygge- og anleggsarbeid og følgearbeid i forbindelse med rørledninger og kabler',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '45232300',
                        name:
                          'Bygge- og anleggsarbeid og følgearbeid i forbindelse med telefon- og kommunikasjonsledning',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '45233000',
                    name:
                      'Bygge- og anleggsarbeid, fundamentering og overflatearbeid i forb.med anlegg av veier',
                    countWithChildren: 3,
                    children: [
                      {
                        code: '45233100',
                        name: 'Byggearbeid i forbindelse med anlegg av veier',
                        countWithoutChildren: 1,
                        countWithChildren: 3,
                        children: [
                          {
                            code: '45233140',
                            name: 'Veiarbeid',
                            countWithChildren: 2,
                            children: [
                              {
                                code: '45233141',
                                name: 'Veivedlikehold',
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
                      'Bygge- og anleggsarbeide i forbindelse flyplassområder, start-/landingsbaner og manøvreringsområder',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45235100',
                        name: 'Arbeid i forbindelse med lufthavner',
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
                name:
                  'Takarbeid og annet spesialarbeid innen for Bygge- og anleggsfagene',
                countWithChildren: 3,
                children: [
                  {
                    code: '45261000',
                    name:
                      'Montasje av takkonstruksjoner og taktekking samt følgearbeid',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45261400',
                        name: 'Platearbeid',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '45261420',
                            name: 'Tettingsarbeid',
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
                    name:
                      'Spesialiserte bygge- og anleggsarbeid, unntatt takarbeid',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '45262400',
                        name: 'Montering av stålprofiler',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '45262410',
                            name: 'Montering av stålprofiler til bygninger',
                            countWithoutChildren: 1,
                            countWithChildren: 1,
                            children: [],
                          },
                        ],
                      },
                      {
                        code: '45262700',
                        name: 'Ombyggingsarbeid',
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
            name: 'Byggningsinnstallasjonsarbeid',
            countWithChildren: 15,
            children: [
              {
                code: '45310000',
                name: 'Installasjon av elektriske ledninger og armaturer',
                countWithoutChildren: 6,
                countWithChildren: 8,
                children: [
                  {
                    code: '45313000',
                    name: 'Installasjon av heis og rulletrapp',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45313100',
                        name: 'Installasjon av heis',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '45316000',
                    name:
                      'Installasjon av belysning og elektriske signalanlegg',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45316100',
                        name: 'Installasjon av utstyr til utendørsbelysning',
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
                name: 'Blikkenslager og rørleggerarbeid',
                countWithoutChildren: 3,
                countWithChildren: 7,
                children: [
                  {
                    code: '45331000',
                    name:
                      'Installasjon av varme-, ventilasjons- og klimaanlegg',
                    countWithoutChildren: 2,
                    countWithChildren: 4,
                    children: [
                      {
                        code: '45331200',
                        name: 'Installasjon av ventilasjons- og klimaanlegg',
                        countWithoutChildren: 1,
                        countWithChildren: 2,
                        children: [
                          {
                            code: '45331230',
                            name: 'Installasjon av kjøleanlegg',
                            countWithChildren: 1,
                            children: [
                              {
                                code: '45331231',
                                name: 'Installasjon av kjøletekniske anlegg',
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
            name: 'Ferdigstillende bygningsarbeid',
            countWithoutChildren: 1,
            countWithChildren: 8,
            children: [
              {
                code: '45420000',
                name: 'Snekkermonteringsarbeid',
                countWithChildren: 3,
                children: [
                  {
                    code: '45422000',
                    name: 'Byggmester, tømrere- og snekker arbeid',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                ],
              },
              {
                code: '45440000',
                name: 'Maler- og glassarbeide',
                countWithoutChildren: 1,
                countWithChildren: 3,
                children: [
                  {
                    code: '45441000',
                    name: 'Glassarbeide',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '45442000',
                    name: 'Påføring av beskyttelseslag',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45442100',
                        name: 'Malearbeide',
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
                name:
                  'Øvrige arbeider i forbindelse med ferdiggjøring av bygninger',
                countWithChildren: 1,
                children: [
                  {
                    code: '45453000',
                    name: 'Ettersyn og renoveringsarbeid',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '45453100',
                        name: 'Renoveringsarbeid',
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
        code: '71000000',
        name: 'Arkitekt-, konstruksjons-, ingeniør- og  inspeksjonstjenester',
        countWithoutChildren: 15,
        countWithChildren: 98,
        children: [
          {
            code: '71200000',
            name: 'Arkitekt- og relaterte tjenester',
            countWithoutChildren: 5,
            countWithChildren: 10,
            children: [
              {
                code: '71210000',
                name: 'Arkitektrådgivning',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '71220000',
                name: 'Arkitektoniske designtjenester',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '71240000',
                name: 'Arkitekt-, ingeniør- og planleggingstjenester',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
            ],
          },
          {
            code: '71300000',
            name: 'Ingeniørtjenester',
            countWithoutChildren: 2,
            countWithChildren: 52,
            children: [
              {
                code: '71310000',
                name: 'Rådgivning ingeniør- og byggetekniske tjenester',
                countWithoutChildren: 14,
                countWithChildren: 32,
                children: [
                  {
                    code: '71311000',
                    name:
                      'Rådgivning ingeniørtjenester i forbindelse med bygge- og anleggsarbeid',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '71313000',
                    name: 'Rådgivning i forbindelse med miljøteknikk',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '71313200',
                        name:
                          'Rådgivning i forbindelse med lydisolering og romakustikk',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '71314000',
                    name: 'Energi og tilhørende tjenester',
                    countWithoutChildren: 4,
                    countWithChildren: 6,
                    children: [
                      {
                        code: '71314200',
                        name: 'Energiforvaltning',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '71315000',
                    name: 'Bygningsteknikk',
                    countWithChildren: 7,
                    children: [
                      {
                        code: '71315200',
                        name: 'Konsulentvirksomhet i forbindelse med bygging',
                        countWithoutChildren: 3,
                        countWithChildren: 3,
                        children: [],
                      },
                      {
                        code: '71315300',
                        name: 'Byggningsoppmålingstjenster',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '71315400',
                        name: 'Bygningsinspeksjon',
                        countWithChildren: 3,
                        children: [
                          {
                            code: '71315410',
                            name: 'Inspeksjon av ventilasjonssystemer',
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
                    name:
                      'Rådgivning i forbindelse med beskyttelse mot og kontroll av farer',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '71317200',
                        name: 'Helse- og sikkerhetstjeneste',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '71317210',
                            name:
                              'Rådgivning i forbindelse med helse- og sikkerhet',
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
                    name: 'Veiledende og rådgivende ingeniørvirksomhet',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '71320000',
                name: 'Prosjektering',
                countWithoutChildren: 5,
                countWithChildren: 8,
                children: [
                  {
                    code: '71322000',
                    name: 'Prosjektering av anleggsarbeid',
                    countWithoutChildren: 1,
                    countWithChildren: 3,
                    children: [
                      {
                        code: '71322300',
                        name: 'Prosjektering av broer',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '71322500',
                        name:
                          'Ingeniørmessig prosjektering i forbindelse med trafikkanlegg',
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
                name: 'Diverse former for ingeniørtjenster',
                countWithChildren: 3,
                children: [
                  {
                    code: '71332000',
                    name: 'Geoteknisk ingeniørtjenster',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '71334000',
                    name: 'Maskintekniske og elektrotekniske ingeniørtjenester',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '71350000',
                name:
                  'Vitenskapelig og teknisk virksomhet i forbindelse med ingeniørarbeid',
                countWithChildren: 7,
                children: [
                  {
                    code: '71351000',
                    name:
                      'Geologisk, geofysisk og annen vitenskapelig prospektering',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '71351500',
                        name: 'Grunnundersøkelser',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '71354000',
                    name: 'Kartfremstilling',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '71354100',
                        name: 'Digital kartlegging',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '71355000',
                    name: 'Oppmålingstjenester',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '71355200',
                        name: 'Geografisk oppmåling',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '71356000',
                    name: 'Tekniske tjenester',
                    countWithChildren: 4,
                    children: [
                      {
                        code: '71356100',
                        name: 'Tekniske kontrolltjenester',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                      {
                        code: '71356200',
                        name: 'Teknisk bistand',
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
            name: 'Byplanleggings- og landskapsarkitekttjenester',
            countWithoutChildren: 3,
            countWithChildren: 4,
            children: [
              {
                code: '71410000',
                name: 'Byplanleggingstjenester',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '71500000',
            name: 'Bygge- og anleggsrelaterte tjenesteytelser',
            countWithChildren: 13,
            children: [
              {
                code: '71520000',
                name: 'Tilsyn med bygge- og anleggsarbeid',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '71540000',
                name: 'Byggeteknisk ledelse',
                countWithoutChildren: 4,
                countWithChildren: 12,
                children: [
                  {
                    code: '71541000',
                    name: 'Byggeteknisk prosjektledelse',
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
            name: 'Teknisk testing, analyse- og rådgivingstjenester',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '71630000',
                name: 'Teknisk inspeksjon og prøving',
                countWithChildren: 1,
                children: [
                  {
                    code: '71631000',
                    name: 'Teknisk inspeksjon',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '71631400',
                        name: 'Teknisk inspeksjon av tekniske konstruksjoner',
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
            name: 'Rådgivningstjenester for vannforsyning og avfallskonsulent',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
        ],
      },
      {
        code: '77000000',
        name: 'Landbruk, skogbruk, hagebruk, akvakultur og bi-avltjenester',
        countWithChildren: 10,
        children: [
          {
            code: '77200000',
            name: 'Skogbrukstjenster',
            countWithChildren: 6,
            children: [
              {
                code: '77210000',
                name: 'Tømmerhogst og transport',
                countWithoutChildren: 6,
                countWithChildren: 6,
                children: [],
              },
            ],
          },
          {
            code: '77300000',
            name: 'Hagebrukstjenester',
            countWithChildren: 4,
            children: [
              {
                code: '77310000',
                name: 'Beplanting og vedlikehold av grøntområder',
                countWithoutChildren: 2,
                countWithChildren: 4,
                children: [
                  {
                    code: '77313000',
                    name: 'Vedlikehold av parker',
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
    main: 'Helse',
    children: [
      {
        code: '33000000',
        name: 'Medisinsk utstyr, legemidler og utstyr til personlig pleie',
        countWithoutChildren: 5,
        countWithChildren: 96,
        children: [
          {
            code: '33100000',
            name: 'Medisinsk utstyr',
            countWithoutChildren: 18,
            countWithChildren: 66,
            children: [
              {
                code: '33110000',
                name:
                  'Utstyr for medisinsk, odontologisk og veterinærmedisinsk bildebehandling',
                countWithoutChildren: 1,
                countWithChildren: 6,
                children: [
                  {
                    code: '33111000',
                    name: 'Røntgenapparatur',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                  {
                    code: '33112000',
                    name:
                      'Bildedannelsesutstyr til ekkografi-, ultralyds- og dopplerundersøkelser',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33112200',
                        name: 'Ultralydapparat',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '33113000',
                    name: 'Utstyr til magnetisk resonansbilldebehandling',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33113100',
                        name: 'MR-scannere',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '33115000',
                    name: 'Utstyr til tomografi',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33115100',
                        name: 'CT scanner',
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
                name: 'Registreringssystemer og undersøkelsesredskap',
                countWithChildren: 1,
                children: [
                  {
                    code: '33122000',
                    name: 'Oftalmologiutstyr',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '33130000',
                name: 'Dentale og sub-spesialitetsinstrumenter og redskap',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
              {
                code: '33140000',
                name: 'Medisinske forbruksvarer',
                countWithoutChildren: 16,
                countWithChildren: 17,
                children: [
                  {
                    code: '33141000',
                    name:
                      'Engangsartikler for ikke-kjemisk medisinsk bruk og hematologiske forbruksartikler',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33141600',
                        name:
                          'Oppsamlingsbeholdere og -poser, drenasjeutstyr og sett',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '33141620',
                            name: 'Medisinske prosedyre- og samlepakker',
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
                name: 'Operasjonsteknikk',
                countWithoutChildren: 1,
                countWithChildren: 6,
                children: [
                  {
                    code: '33162000',
                    name: 'Apparatur og instrumenter til operasjonsstuer',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '33162100',
                        name: 'Utstyr til operasjonsstuer',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '33162200',
                        name: 'Instrumenter til operasjonsstuer',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '33164000',
                    name: 'Utstyr til laparoskopi',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '33169000',
                    name: 'Kirurgiske instrumenter',
                    countWithoutChildren: 1,
                    countWithChildren: 2,
                    children: [
                      {
                        code: '33169100',
                        name: 'Kirurgisk laser',
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
                name: 'Anestesi og gjenoppliving',
                countWithChildren: 2,
                children: [
                  {
                    code: '33172000',
                    name: 'Utstyr til anestesi og gjenoppliving',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '33180000',
                name: 'Funksjonsstøtte',
                countWithChildren: 5,
                children: [
                  {
                    code: '33182000',
                    name: 'Apparatur til støtte av hjertefunksjoner',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '33182300',
                        name: 'Utstyr til hjertekirurgi',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '33183000',
                    name: 'Ortopediske hjelpemidler',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33183200',
                        name: 'Ortopediske proteser',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '33184000',
                    name: 'Proteser',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '33184100',
                        name: 'Kirurgiske implantater',
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
                name: 'Diverse medisinske redskap og produkter',
                countWithChildren: 9,
                children: [
                  {
                    code: '33191000',
                    name: 'Utstyr til sterilisasjon, desinfeksjon og hygiene',
                    countWithoutChildren: 1,
                    countWithChildren: 3,
                    children: [
                      {
                        code: '33191100',
                        name: 'Steriliseringsapparat',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '33191110',
                            name: 'Autoklaver',
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
                    name: 'Møbler til medisinsk bruk',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33192100',
                        name: 'Senger til medisinsk bruk',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '33192130',
                            name: 'Stillbare senger med motor',
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
                    name: 'Medisinske hjelpemidler',
                    countWithoutChildren: 1,
                    countWithChildren: 5,
                    children: [
                      {
                        code: '33196200',
                        name: 'Hjelpemidler til handikappede',
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
            name: 'Farmasøytiske produkter',
            countWithoutChildren: 14,
            countWithChildren: 20,
            children: [
              {
                code: '33660000',
                name: 'Legemidler som virker på nervesystemet og sanseorganer',
                countWithChildren: 1,
                children: [
                  {
                    code: '33662000',
                    name: 'Legemidler som virker på sanseorganer',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33662100',
                        name: 'Midler til øyesykdommer',
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
                name: 'Diverse legemidler',
                countWithChildren: 5,
                children: [
                  {
                    code: '33694000',
                    name: 'Diagnostiske midler',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                  {
                    code: '33696000',
                    name: 'Reagenser og kontrastmidler',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '33696500',
                        name: 'Laboratoriereagenser',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '33698000',
                    name: 'Kliniske produkter',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '33698100',
                        name: 'Mikrobiologiske kulturer',
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
            name: 'Personlig pleieprodukter',
            countWithChildren: 5,
            children: [
              {
                code: '33750000',
                name: 'Produkter til spedbarnspleie',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '33760000',
                name: 'Toalettpapir, lommetørkler, håndklær og servietter',
                countWithoutChildren: 4,
                countWithChildren: 4,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '85000000',
        name: 'Helse- og sosial tjenesteyting',
        countWithoutChildren: 3,
        countWithChildren: 21,
        children: [
          {
            code: '85100000',
            name: 'Tjenesteytelser innen helsevesenet',
            countWithChildren: 9,
            children: [
              {
                code: '85140000',
                name: 'Diverse helsetjenester',
                countWithoutChildren: 2,
                countWithChildren: 9,
                children: [
                  {
                    code: '85145000',
                    name: 'Tjenester utført av medisinske laboratorier',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '85147000',
                    name: 'Bedriftshelsetjenester',
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
            name: 'Dyrlege',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
          {
            code: '85300000',
            name: 'Sosialtjenester og tilhørende tjenester',
            countWithChildren: 7,
            children: [
              {
                code: '85310000',
                name: 'Sosialarbeid',
                countWithChildren: 6,
                children: [
                  {
                    code: '85311000',
                    name: 'Sosialomsorg med innkvartering',
                    countWithoutChildren: 2,
                    countWithChildren: 6,
                    children: [
                      {
                        code: '85311100',
                        name: 'Omsorg for eldre',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '85311300',
                        name: 'Barne- og ungdomsomsorg',
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
                name: 'Sosialtjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '85323000',
                    name: 'Kommunale helsetjenester',
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
        name: 'Rekreasjon, kultur og sport',
        countWithChildren: 14,
        children: [
          {
            code: '92100000',
            name: 'Tjenester i forbindelse med film og video',
            countWithoutChildren: 2,
            countWithChildren: 4,
            children: [
              {
                code: '92110000',
                name: 'Film og videobånd produksjon samt tilhørende tjenester',
                countWithChildren: 2,
                children: [
                  {
                    code: '92111000',
                    name: 'Film- og videoproduksjon',
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
            name: 'Radio- og fjernsynstjenester',
            countWithChildren: 3,
            children: [
              {
                code: '92220000',
                name: 'Fjernsynstjenester',
                countWithoutChildren: 2,
                countWithChildren: 3,
                children: [
                  {
                    code: '92224000',
                    name: 'Digital TV',
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
            name: 'Fornøyelsesvirksomhet',
            countWithChildren: 2,
            children: [
              {
                code: '92350000',
                name: 'Spille- og tippetjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '92351000',
                    name: 'Spilletjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '92370000',
                name: 'Lydtekniker',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '92400000',
            name: 'Nyhetsbyråtjenester',
            countWithoutChildren: 2,
            countWithChildren: 2,
            children: [],
          },
          {
            code: '92500000',
            name: 'Biblioteker, arkiver, museer og andre kulturtjenester',
            countWithChildren: 1,
            children: [
              {
                code: '92520000',
                name:
                  'Museumstjenester og bevaringstjenester av historiske plasser og bygninger',
                countWithChildren: 1,
                children: [
                  {
                    code: '92521000',
                    name: 'Museumstjenester',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '92521100',
                        name: 'Utstillingstjenester på museer',
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
            name: 'Tjenester vedrørende sport',
            countWithChildren: 2,
            children: [
              {
                code: '92610000',
                name: 'Drift av sports- og idrettsanlegg',
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
    main: 'Varer og utstyr',
    children: [
      {
        code: '15000000',
        name: 'Næringsmidler, drikkevarer, tobakk og relaterte produkter',
        countWithoutChildren: 8,
        countWithChildren: 19,
        children: [
          {
            code: '15100000',
            name: 'Dyreprodukter, kjøtt og kjøttprodukter',
            countWithoutChildren: 2,
            countWithChildren: 3,
            children: [
              {
                code: '15130000',
                name: 'Kjøttprodukter',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '15500000',
            name: 'Meieriprodukter',
            countWithoutChildren: 4,
            countWithChildren: 4,
            children: [],
          },
          {
            code: '15700000',
            name: 'Fôrblandinger til dyr',
            countWithChildren: 1,
            children: [
              {
                code: '15710000',
                name: 'Preparert dyrefór til gårdsdyr og andre dyr',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '15800000',
            name: 'Diverse ernæringsmidler',
            countWithoutChildren: 1,
            countWithChildren: 3,
            children: [
              {
                code: '15810000',
                name: 'Brødprodukter, fersk bakverk og kaker',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '15890000',
                name: 'Diverse matprodukter og tørkede varer',
                countWithChildren: 1,
                children: [
                  {
                    code: '15893000',
                    name: 'Tørrvarer',
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
        code: '18000000',
        name: 'Klær, fottøy, bagasjeartikler og tilbehør',
        countWithoutChildren: 1,
        countWithChildren: 10,
        children: [
          {
            code: '18100000',
            name: 'Yrkesklær, spesielle arbeidsklær og tilbehør',
            countWithoutChildren: 3,
            countWithChildren: 6,
            children: [
              {
                code: '18110000',
                name: 'Arbeidsklær',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
            ],
          },
          {
            code: '18500000',
            name: 'Smykker, klokker og relaterte artikler',
            countWithChildren: 1,
            children: [
              {
                code: '18530000',
                name: 'Gaver og belønninger',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '18900000',
            name: 'Bagasjeartikler, seletøy, sekker og vesker',
            countWithChildren: 2,
            children: [
              {
                code: '18930000',
                name: 'Sekker og poser',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '18937000',
                    name: 'Sekker til pakning av varer',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '18937100',
                        name: 'Poser til pakning av varer',
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
        name: 'Lær og tekstilstoffer, plast- og gummimaterialer.',
        countWithChildren: 1,
        children: [
          {
            code: '19600000',
            name: 'Lær-, tekstil-, gummi- og plastavfall',
            countWithChildren: 1,
            children: [
              {
                code: '19640000',
                name: 'Polyetylen søppelposer og -bager',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '35000000',
        name: 'Sikkerhets-, brannslukkings-, politi- og forsvarsutstyr',
        countWithChildren: 7,
        children: [
          {
            code: '35100000',
            name: 'Nød- og sikkerhetsutstyr',
            countWithChildren: 2,
            children: [
              {
                code: '35110000',
                name: 'Brannslukkings-, rednings- og sikkerhetsutstyr',
                countWithChildren: 1,
                children: [
                  {
                    code: '35113000',
                    name: 'Sikkerhetsutstyr',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '35113400',
                        name: 'Beskyttelse og sikkerhetsbekledning',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '35113420',
                            name:
                              'Beskyttelsesklær mot kjernefysiskstråling og radioaktivitet',
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
                name: 'Overvåknings- og sikkerhetssystemer og redskap',
                countWithChildren: 1,
                children: [
                  {
                    code: '35121000',
                    name: 'Sikringsutstyr',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '35121700',
                        name: 'Alarmsystemer',
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
            name: 'Politiutstyr',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '35500000',
            name: 'Krigsskip og deler',
            countWithChildren: 1,
            children: [
              {
                code: '35510000',
                name: 'Krigsskip',
                countWithChildren: 1,
                children: [
                  {
                    code: '35512000',
                    name: 'Undervannsbåter',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '35512400',
                        name: 'Ubemannede undervannsfartøy',
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
            name: 'Individuelt- og støtteutstyr',
            countWithChildren: 3,
            children: [
              {
                code: '35810000',
                name: 'Personlig utstyr',
                countWithChildren: 3,
                children: [
                  {
                    code: '35811000',
                    name: '',
                    countWithChildren: 3,
                    children: [
                      {
                        code: '35811200',
                        name: '',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                      {
                        code: '35811300',
                        name: '',
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
          'Musikkinstrumenter, sportsvarer, spill, leker, kunsthåndtverk- og kunstnerartikler, tilbehør.',
        countWithoutChildren: 1,
        countWithChildren: 5,
        children: [
          {
            code: '37400000',
            name: 'Sportsartikler og -utstyr',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '37410000',
                name: 'Utstyr til utendørssport',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '37500000',
            name: 'Spill og leker; forlystelsesplassutstyr',
            countWithChildren: 1,
            children: [
              {
                code: '37520000',
                name: 'Leketøy',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '37800000',
            name: 'Håndverks- og kunstmateriale',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '03000000',
        name: 'Landbruk, gårdsbruk, fiske, skogsbruk og relaterte produkter',
        countWithoutChildren: 2,
        countWithChildren: 6,
        children: [
          {
            code: '03300000',
            name: 'Gårdsbruk, jakt- og fiskeprodukter',
            countWithChildren: 1,
            children: [
              {
                code: '03310000',
                name: 'Fisk, skalldyr og sjøprodukter',
                countWithChildren: 1,
                children: [
                  {
                    code: '03311000',
                    name: 'Fisk',
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
            name: 'Korn, poteter, grønnsaker, frukt og nøtter',
            countWithChildren: 2,
            children: [
              {
                code: '03220000',
                name: 'Grønnsaker, frukt og nøtter',
                countWithChildren: 2,
                children: [
                  {
                    code: '03221000',
                    name: 'Grønnsaker',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '03221200',
                        name: 'Frukt grønnsaker',
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
            name: 'Landbruk og hagebruksprodukter',
            countWithChildren: 1,
            children: [
              {
                code: '03120000',
                name: 'Landbruks- og gartneriprodukter',
                countWithChildren: 1,
                children: [
                  {
                    code: '03121000',
                    name: 'Hagebruks produkter',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '03121200',
                        name: 'Avskårne blomster',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '03121210',
                            name: 'Blomsterarrangementer',
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
    ],
  },
  {
    main: 'Tjenester',
    children: [
      {
        code: '50000000',
        name: 'Reperasjons- og vedlikeholdstjenester',
        countWithoutChildren: 11,
        countWithChildren: 57,
        children: [
          {
            code: '50100000',
            name:
              'Reparasjon, vedlikehold og tilhørende tjenester tilknyttet kjøretøyer og dets utstyr',
            countWithoutChildren: 2,
            countWithChildren: 8,
            children: [
              {
                code: '50110000',
                name:
                  'Reparasjon og vedlikeholdstjenester på motorkjøretøyer og tilhørende utstyr',
                countWithChildren: 6,
                children: [
                  {
                    code: '50111000',
                    name:
                      'Forvaltning av bilpark, reparasjon og vedlikeholdstjenester',
                    countWithoutChildren: 2,
                    countWithChildren: 4,
                    children: [
                      {
                        code: '50111100',
                        name: 'Forvaltning av vognpark',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '50112000',
                    name: 'Reparasjon og vedlikeholdstjenester av biler',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '50117000',
                    name: 'Ombygging og istandsettelse av kjøretøyer',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '50117100',
                        name: 'Ombygging av motorkjøretøyer',
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
              'Reparasjon, vedlikehold og tilhørende tjenester tilknyttet luftfartøy, jernbaner, veier og sjøfartsutstyr',
            countWithChildren: 5,
            children: [
              {
                code: '50220000',
                name:
                  'Reparasjon, vedlikehold og tilhørende tjenester tilknyttet jernbaner og annet utstyr',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '50230000',
                name:
                  'Reparasjon, vedlikehold og tilhørende tjenester tilknyttet veier og annet utstyr',
                countWithChildren: 2,
                children: [
                  {
                    code: '50232000',
                    name: 'Vedlikehold av veibelysning og trafikklys',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '50232100',
                        name: 'Vedlikehold av veibelysning',
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
                  'Reparasjon, vedlikehold og tilhørende tjenester tilknyttet sjøfart og annet utstyr',
                countWithChildren: 2,
                children: [
                  {
                    code: '50241000',
                    name: 'Reparasjon og vedlikehold av skip',
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
              'Reparasjon og vedlikehold av medisinsk utstyr og presisjonsutstyr',
            countWithChildren: 5,
            children: [
              {
                code: '50410000',
                name:
                  'Reparasjon og vedlikehold av måle-, test- og kontrollapparater',
                countWithChildren: 3,
                children: [
                  {
                    code: '50413000',
                    name: 'Reparasjon og vedlikehold av kontrollapparater',
                    countWithChildren: 3,
                    children: [
                      {
                        code: '50413100',
                        name:
                          'Reparasjon og vedlikehold av utstyr til gasspåvising',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '50413200',
                        name:
                          'Reparasjon og vedlikehold av brannslokkingsutstyr',
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
                  'Reparasjon og vedlikehold av medisinsk og kirurgisk utstyr',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '50421000',
                    name: 'Reparasjon og vedlikehold av medisinsk utstyr',
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
              'Reparasjon og vedlikehold av pumper, ventiler, tappekraner og metallbeholdere, anlegg og maskiner',
            countWithChildren: 4,
            children: [
              {
                code: '50510000',
                name:
                  'Reparasjon og vedlikehold av pumper, ventiler, tappekraner og metallbeholdere',
                countWithChildren: 2,
                children: [
                  {
                    code: '50514000',
                    name: 'Reparasjon og vedlikehold av metallbeholdere',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '50514300',
                        name: 'Reparasjon av rørledningssystemer',
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
                name: 'Reparasjon og vedlikehold av maskiner',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '50531000',
                    name:
                      'Reparasjon og vedlikehold av ikke-elektrisk maskineri',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '50531300',
                        name: 'Reparasjon og vedlikehold av kompressorer',
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
            name: 'Reparasjon og vedlikehold knyttet til bygninger',
            countWithoutChildren: 7,
            countWithChildren: 23,
            children: [
              {
                code: '50710000',
                name:
                  'Reparasjon og vedlikehold av elektriske og mekaniske installasjoner i bygninger',
                countWithoutChildren: 2,
                countWithChildren: 12,
                children: [
                  {
                    code: '50711000',
                    name:
                      'Reparasjon og vedlikehold av elektriske installasjoner i bygninger',
                    countWithoutChildren: 9,
                    countWithChildren: 9,
                    children: [],
                  },
                  {
                    code: '50712000',
                    name:
                      'Reparasjon og vedlikehold av mekaniske installasjoner i bygninger',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '50720000',
                name: 'Reparasjon og vedlikehold av sentralvarmeanlegg',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '50730000',
                name: 'Reparasjon og vedlikehold av kjøleanlegg',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
            ],
          },
          {
            code: '50800000',
            name: 'Diverse reparasjons- og vedlikeholdstjenester',
            countWithChildren: 1,
            children: [
              {
                code: '50850000',
                name: 'Reparasjon og vedlikehold av møbler',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '55000000',
        name:
          'Tjenester relatert til Hotell- og restaurantvirksomhet, Detaljhandel',
        countWithChildren: 7,
        children: [
          {
            code: '55100000',
            name: 'Hotelltjenester',
            countWithChildren: 3,
            children: [
              {
                code: '55110000',
                name: 'Hotelltjenester, opphold',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
              {
                code: '55120000',
                name: 'Møter og konferanser, på hotell ',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '55200000',
            name: 'Campingplasser og annen losji unntatt hotell',
            countWithChildren: 2,
            children: [
              {
                code: '55240000',
                name: 'Ferieanleggs- og ferieboligtjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '55243000',
                    name: 'Feriekolonitjenester for barn',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '55250000',
                name:
                  'Utleie av møblerte boliger og hytter til korttidsopphold',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '55500000',
            name: 'Kantine- og cateringvirksomhet',
            countWithChildren: 2,
            children: [
              {
                code: '55510000',
                name: 'Kantinevirksomhet',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '55520000',
                name: 'Cateringvirksomhet',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '66000000',
        name: 'Finansielle- og forsikringsformidlingstjenester',
        countWithoutChildren: 4,
        countWithChildren: 25,
        children: [
          {
            code: '66100000',
            name:
              'Formidlingstjenester i forbindelse med bankvesen og investeringer',
            countWithoutChildren: 1,
            countWithChildren: 10,
            children: [
              {
                code: '66110000',
                name: 'Bankformidlingstjenester',
                countWithoutChildren: 3,
                countWithChildren: 7,
                children: [
                  {
                    code: '66114000',
                    name: 'Finansiell leasingstjenester',
                    countWithoutChildren: 4,
                    countWithChildren: 4,
                    children: [],
                  },
                ],
              },
              {
                code: '66150000',
                name:
                  'Tjenester i forbindelse med Forvaltning av kapitalfinansmarkeder',
                countWithChildren: 1,
                children: [
                  {
                    code: '66152000',
                    name: 'Tilsynstjenester i forbindelse med finansmarkedet',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '66170000',
                name:
                  'Tjenester i forbindelse med finansrådgivning, finansoverføringshåndtering og finans/garanti-institusjon',
                countWithChildren: 1,
                children: [
                  {
                    code: '66171000',
                    name: 'Tjenester i forbindelse med finansrådgivning',
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
            name: 'Forsikrings- og pensjonstjenester',
            countWithChildren: 11,
            children: [
              {
                code: '66510000',
                name: 'Forsikringstjenester',
                countWithoutChildren: 9,
                countWithChildren: 11,
                children: [
                  {
                    code: '66511000',
                    name: 'Livsforsikringstjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '66514000',
                    name:
                      'Fraktforsikrings- og forsikringstjenester i forbindelse med transport',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '66514100',
                        name: 'Forsikring i forbindelse med transport',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '66514110',
                            name: 'Motorkjøretøysforsikring',
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
        name: 'Virksomhet i forbindelse med fast eiendom',
        countWithoutChildren: 1,
        countWithChildren: 3,
        children: [
          {
            code: '70100000',
            name: 'Eiendomsmeglertjenster med egne eiendommer',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '70200000',
            name: 'Utleie eller leasing av egen fast eiendom',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '73000000',
        name:
          'Forsknings- og utviklingsvirksomhet og tilhørende konsulenttjenester',
        countWithoutChildren: 8,
        countWithChildren: 23,
        children: [
          {
            code: '73100000',
            name: 'Forskning og eksperimentell utvikling',
            countWithoutChildren: 1,
            countWithChildren: 5,
            children: [
              {
                code: '73110000',
                name: 'Forskning',
                countWithoutChildren: 3,
                countWithChildren: 4,
                children: [
                  {
                    code: '73111000',
                    name: 'Forskningslaboratorietjenester',
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
            name:
              'Konsulentvirksomhet i forbindelse med forskning og utvikling',
            countWithoutChildren: 7,
            countWithChildren: 10,
            children: [
              {
                code: '73220000',
                name: 'Konsulentvirksomhet i forbindelse med utvikling',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: '79000000',
        name:
          'Forretningstjenester: lov, reklame, rådgiving, ansettelse, trykking og sikkerhet',
        countWithoutChildren: 2,
        countWithChildren: 104,
        children: [
          {
            code: '79100000',
            name: 'Juridiske tjenester',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '79110000',
                name: 'Juridisk rådgivning og representasjon',
                countWithChildren: 1,
                children: [
                  {
                    code: '79111000',
                    name: 'Juridisk rådgivning',
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
            name: 'Regnskaps-, revisjons- og skattemessige tjenester',
            countWithoutChildren: 4,
            countWithChildren: 11,
            children: [
              {
                code: '79210000',
                name: 'Regnskaps- og revisjonstjenester',
                countWithChildren: 7,
                children: [
                  {
                    code: '79211000',
                    name: 'Regnskapsføring',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '79212000',
                    name: 'Revisjonsvirksomhet',
                    countWithoutChildren: 3,
                    countWithChildren: 6,
                    children: [
                      {
                        code: '79212200',
                        name: 'Intern revisjonsvirksomhet',
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
            name:
              'Markeds- og økonomisk analyse; offentlig meningsmåling og statistikk',
            countWithoutChildren: 3,
            countWithChildren: 17,
            children: [
              {
                code: '79310000',
                name: 'Markedsanalyse',
                countWithChildren: 3,
                children: [
                  {
                    code: '79311000',
                    name: 'Rundspørringer',
                    countWithChildren: 3,
                    children: [
                      {
                        code: '79311100',
                        name: 'Utforming av undersøkelse',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '79311200',
                        name: 'Utførelse av undersøkelse',
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
                name: 'Reklame og markedsføringstjenester',
                countWithoutChildren: 9,
                countWithChildren: 11,
                children: [
                  {
                    code: '79342000',
                    name: 'Markedsføringstjenester',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '79342300',
                        name: 'Kundetjenester',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '79342310',
                            name: 'Kundeundersøkelser',
                            countWithChildren: 2,
                            children: [
                              {
                                code: '79342311',
                                name: 'Kundetilfredshetsundersøkelser',
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
            name:
              'Bedriftsrådgivning og administrativ rådgivning og beslektede tjenester',
            countWithoutChildren: 5,
            countWithChildren: 23,
            children: [
              {
                code: '79410000',
                name: 'Bedriftsrådgivning og administrativ rådgivning',
                countWithoutChildren: 2,
                countWithChildren: 14,
                children: [
                  {
                    code: '79411000',
                    name: 'Vanlig bedriftsrådgivning',
                    countWithChildren: 4,
                    children: [
                      {
                        code: '79411100',
                        name: 'Bedriftsutvikling og rådgivning',
                        countWithoutChildren: 4,
                        countWithChildren: 4,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '79412000',
                    name: 'Rådgivning i forbindelse med økonomisk forvaltning',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                  {
                    code: '79415000',
                    name: 'Rådgivning innen produksjonsledelse',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '79415200',
                        name: 'Konsulentvirksomhet i forbindelse med design',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '79416000',
                    name: 'PR-virksomhet',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '79416200',
                        name: 'PR-servicevirksomhet',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '79418000',
                    name: 'Rådgivning vedrørende innkjøp',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '79420000',
                name: 'Ledelsesrelaterte tjenester',
                countWithChildren: 4,
                children: [
                  {
                    code: '79421000',
                    name:
                      'Prosjektledelse, med unntak av bygge- og anleggsarbeid',
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
            name: 'Kontorstøttetjenester',
            countWithChildren: 8,
            children: [
              {
                code: '79520000',
                name: 'Reprografiske tjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '79521000',
                    name: 'Kopieringstjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '79530000',
                name: 'Oversettelsestjenester',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
              {
                code: '79540000',
                name: 'Tolkingstjenester',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
              {
                code: '79560000',
                name: 'Arkiveringstjenester',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '79600000',
            name: 'Rekrutteringstjenester',
            countWithoutChildren: 6,
            countWithChildren: 21,
            children: [
              {
                code: '79610000',
                name: 'Arbeidsformidlingtjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '79611000',
                    name: 'Jobbsøkingstjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '79620000',
                name:
                  'Formidling av personale, inkludert midlertidig personale',
                countWithoutChildren: 6,
                countWithChildren: 11,
                children: [
                  {
                    code: '79624000',
                    name: 'Formidling av pleiepersonal',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '79625000',
                    name: 'Formidling av medisinsk personal',
                    countWithoutChildren: 4,
                    countWithChildren: 4,
                    children: [],
                  },
                ],
              },
              {
                code: '79630000',
                name:
                  'Personaltjenester unntatt arbeidsformidling og formidling',
                countWithChildren: 3,
                children: [
                  {
                    code: '79634000',
                    name: 'Karriererådgivertjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '79635000',
                    name:
                      'Bedømmelsessentertjenester i forbindelse med ansettelser',
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
            name: 'Etterforsknings- og sikkerhetstjenester',
            countWithChildren: 11,
            children: [
              {
                code: '79710000',
                name: 'Sikkerhetstjenester',
                countWithoutChildren: 4,
                countWithChildren: 11,
                children: [
                  {
                    code: '79711000',
                    name: 'Alarmovervåkningstjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '79713000',
                    name: 'Vakttjenester',
                    countWithoutChildren: 5,
                    countWithChildren: 5,
                    children: [],
                  },
                  {
                    code: '79714000',
                    name: 'Overvåkningstjenester',
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
            name: 'Trykking og relaterte tjenester',
            countWithoutChildren: 2,
            countWithChildren: 4,
            children: [
              {
                code: '79820000',
                name: 'Tjenester i tilknytning til trykking',
                countWithChildren: 2,
                children: [
                  {
                    code: '79822000',
                    name: 'Setting',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '79822500',
                        name: 'Grafisk design',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '79824000',
                    name: 'Trykking og distribusjon',
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
            name: 'Diverse nærings- og næringsrelaterte tjenester',
            countWithChildren: 5,
            children: [
              {
                code: '79930000',
                name: 'Spesialiserte design tjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '79934000',
                    name: 'Møbeldesigntjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '79940000',
                name: 'Inkassovirksomhet',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '79941000',
                    name: 'Innkassering av avgifter',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '79990000',
                name: 'Diverse næringsrelaterte tjenester',
                countWithChildren: 2,
                children: [
                  {
                    code: '79997000',
                    name: 'Forretningsreisetjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '79999000',
                    name: 'Skannings- og faktureringstjenester',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '79999100',
                        name: 'Skanningstjenester',
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
        name: 'Tjenester i forbindelse med trening og utdannelse',
        countWithoutChildren: 1,
        countWithChildren: 12,
        children: [
          {
            code: '80100000',
            name: 'Undervisning i grunnskolen',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '80200000',
            name: 'Undervisning på ungdomsskole/videregående nivå',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '80300000',
            name: 'Videregående utdannelse',
            countWithChildren: 1,
            children: [
              {
                code: '80320000',
                name: 'Medisinsk undervisning',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '80400000',
            name: 'Voksenundervisning og annen undervisning',
            countWithoutChildren: 1,
            countWithChildren: 7,
            children: [
              {
                code: '80410000',
                name: 'Diverse skoletjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '80411000',
                    name: 'Kjøreskoletjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '80420000',
                name: 'E-læringstjenester',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
              {
                code: '80430000',
                name: 'Voksenundervisning på universitetsnivå',
                countWithoutChildren: 3,
                countWithChildren: 3,
                children: [],
              },
            ],
          },
          {
            code: '80500000',
            name: 'Utdannelsestilbud',
            countWithChildren: 1,
            children: [
              {
                code: '80530000',
                name: 'Yrkesutdannelse',
                countWithChildren: 1,
                children: [
                  {
                    code: '80532000',
                    name: 'Utdannelse i bedriftsledelse',
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
        name: 'Avløp, søppel, sanitære og miljømessige tjenester',
        countWithChildren: 96,
        children: [
          {
            code: '90400000',
            name: 'Avløpstjenester',
            countWithChildren: 2,
            children: [
              {
                code: '90460000',
                name: 'Tømming av septiktanker eller kloakkummer',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '90500000',
            name: 'Avfallstjenester',
            countWithoutChildren: 9,
            countWithChildren: 38,
            children: [
              {
                code: '90510000',
                name: 'Avfallshåndtering',
                countWithoutChildren: 12,
                countWithChildren: 28,
                children: [
                  {
                    code: '90511000',
                    name: 'Innsamling av avfall',
                    countWithoutChildren: 4,
                    countWithChildren: 5,
                    children: [
                      {
                        code: '90511400',
                        name: 'Innsamling av papir',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '90512000',
                    name: 'Transport av avfall',
                    countWithoutChildren: 6,
                    countWithChildren: 6,
                    children: [],
                  },
                  {
                    code: '90513000',
                    name: 'Behandling og deponering av avfall og søppel',
                    countWithChildren: 5,
                    children: [
                      {
                        code: '90513600',
                        name: 'Tjenester for fjerning av slam',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '90513700',
                        name: 'Tjenester for transport av slam',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                      {
                        code: '90513800',
                        name: 'Tjenester for behandling av slam',
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
                name:
                  'Tjenester i forbindelse med radioaktivt, giftig, medisinsk og farlig avfall',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '90600000',
            name:
              'Virksomhet i forbindelse med opprydding og hygiene i by- og landområder og lignende tjenester',
            countWithChildren: 21,
            children: [
              {
                code: '90610000',
                name: 'Renholds- og feiingstjenester for gater',
                countWithChildren: 1,
                children: [
                  {
                    code: '90612000',
                    name: 'Gatefeiing',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '90620000',
                name: 'Snørydding og brøyting',
                countWithoutChildren: 18,
                countWithChildren: 18,
                children: [],
              },
              {
                code: '90670000',
                name:
                  'Desinfisering og skadedyrbekjempelse i by- og landområder',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '90700000',
            name: 'Tjenester i forbindelse med miljø',
            countWithoutChildren: 2,
            countWithChildren: 12,
            children: [
              {
                code: '90710000',
                name: 'Miljøforvaltning',
                countWithoutChildren: 1,
                countWithChildren: 9,
                children: [
                  {
                    code: '90711000',
                    name:
                      'Miljøpåvirkningsanalyse, bortsett fra bygge- og anleggsarbeid',
                    countWithChildren: 7,
                    children: [
                      {
                        code: '90711500',
                        name:
                          'Miljøovervåking, bortsett fra bygge- og anleggsarbeid',
                        countWithoutChildren: 7,
                        countWithChildren: 7,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '90713000',
                    name: 'Rådgivningstjenester relatert til miljø',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '90730000',
                name: 'Overvåkning, sporing av forurensning og gjenvinning',
                countWithChildren: 1,
                children: [
                  {
                    code: '90733000',
                    name: 'Tjenesteytelser i forbindelse med vannforurensning',
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
            name: 'Renholds- og saniteringstjenester',
            countWithoutChildren: 4,
            countWithChildren: 23,
            children: [
              {
                code: '90910000',
                name: 'Rengjøring',
                countWithoutChildren: 5,
                countWithChildren: 18,
                children: [
                  {
                    code: '90911000',
                    name: 'Renholdstjenester for lokaler, bygninger og vinduer',
                    countWithoutChildren: 11,
                    countWithChildren: 12,
                    children: [
                      {
                        code: '90911300',
                        name: 'Vinduspussing',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '90919000',
                    name: 'Renholdstjenester for kontor, skole og kontorutstyr',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '90920000',
                name: 'Fasilitetsspesifikke sanitetstjenester.',
                countWithChildren: 1,
                children: [
                  {
                    code: '90922000',
                    name: 'Skadedyrsbekjempelse',
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
    main: 'Elektronisk utstyr',
    children: [
      {
        code: '31000000',
        name:
          'Elektrisk maskineri, apparater, utstyr og forbruksvarer; Belysning',
        countWithChildren: 9,
        children: [
          {
            code: '31300000',
            name: 'Isolert ledning og kabel',
            countWithChildren: 1,
            children: [
              {
                code: '31330000',
                name: 'Koaksialkabel',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '31500000',
            name: 'Belysningsutstyr og elektriske lamper',
            countWithoutChildren: 2,
            countWithChildren: 3,
            children: [
              {
                code: '31510000',
                name: 'Elektriske glødelamper',
                countWithChildren: 1,
                children: [
                  {
                    code: '31518000',
                    name: 'Signallys',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '31518100',
                        name: 'Projektører, flomlys',
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
            name: 'Elektrisk utstyr',
            countWithChildren: 1,
            children: [
              {
                code: '31620000',
                name: 'Akustiske eller visuelle signalapparater',
                countWithChildren: 1,
                children: [
                  {
                    code: '31625000',
                    name: 'Tyveri- og brannalarmer',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '31625300',
                        name: 'Tyverialarmsystemer',
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
            name: 'Elektroniske, elektromekaniske og elektrotekniske artikler',
            countWithChildren: 4,
            children: [
              {
                code: '31710000',
                name: 'Elektronisk utstyr',
                countWithoutChildren: 3,
                countWithChildren: 4,
                children: [
                  {
                    code: '31711000',
                    name: 'Elektroniske artikler',
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
        name: 'Radio-, fjernsyn-, og telekommunikasjon samt  tilhørende utstyr',
        countWithoutChildren: 2,
        countWithChildren: 16,
        children: [
          {
            code: '32300000',
            name:
              'Fjernsyns- og radiomottakere, og lyd- eller videoopptakere eller videoavspillere',
            countWithChildren: 5,
            children: [
              {
                code: '32320000',
                name: 'Fjernsynsutstyr og AV-utstyr',
                countWithChildren: 4,
                children: [
                  {
                    code: '32321000',
                    name: 'Prosjektorutstyr for fjernsyn',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '32321200',
                        name: 'Audiovisuelt (AV) utstyr',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '32323000',
                    name: 'Videomonitorer',
                    countWithoutChildren: 1,
                    countWithChildren: 2,
                    children: [
                      {
                        code: '32323500',
                        name: 'Video overvåkningssystem',
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
                name: 'Mikrofoner og høyttalere',
                countWithChildren: 1,
                children: [
                  {
                    code: '32342000',
                    name: 'Høyttalere',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '32342100',
                        name: 'Hodetelefoner',
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
            name: 'Nettverk',
            countWithoutChildren: 2,
            countWithChildren: 7,
            children: [
              {
                code: '32410000',
                name: 'Lokalnett',
                countWithChildren: 1,
                children: [
                  {
                    code: '32413000',
                    name: 'Integrerte nettverk',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '32413100',
                        name: 'Nettverkroutere',
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
                name: 'Nettverksutstyr',
                countWithoutChildren: 3,
                countWithChildren: 4,
                children: [
                  {
                    code: '32424000',
                    name: 'Nettverksinfrastruktur',
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
            name: 'Telekommunikasjonsutstyr og tilbehør',
            countWithChildren: 2,
            children: [
              {
                code: '32560000',
                name: 'Fiberoptiske materialer',
                countWithChildren: 1,
                children: [
                  {
                    code: '32561000',
                    name: 'Fiberoptiske forbindelser',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '32580000',
                name: 'Datautstyr',
                countWithChildren: 1,
                children: [
                  {
                    code: '32581000',
                    name: 'Datakommunikasjonsutstyr',
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
    main: 'Transport',
    children: [
      {
        code: '34000000',
        name: 'Transportutstyr og hjelpeprodukter til transport',
        countWithoutChildren: 1,
        countWithChildren: 64,
        children: [
          {
            code: '34100000',
            name: 'Motorkjøretøy',
            countWithoutChildren: 8,
            countWithChildren: 50,
            children: [
              {
                code: '34110000',
                name: 'Personbiler',
                countWithoutChildren: 1,
                countWithChildren: 5,
                children: [
                  {
                    code: '34111000',
                    name: 'Stasjonsvogner og personbiler',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '34114000',
                    name: 'Spesialkjøretøyer',
                    countWithoutChildren: 2,
                    countWithChildren: 3,
                    children: [
                      {
                        code: '34114400',
                        name: 'Minibusser',
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
                name: 'Motorkjøretøyer til godstransport',
                countWithoutChildren: 1,
                countWithChildren: 3,
                children: [
                  {
                    code: '34133000',
                    name: 'Leddede lastebiler',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '34133100',
                        name: 'Tankbiler',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '34134000',
                    name: 'Flat- og tippvogner',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '34134200',
                        name: 'Lastebiler med tippeplan',
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
                name: 'Tunge motorkjøretøyer',
                countWithoutChildren: 1,
                countWithChildren: 34,
                children: [
                  {
                    code: '34142000',
                    name: 'Kranbiler og tippvogner',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '34143000',
                    name: 'Motorkjøretøyer til vintervedlikehold',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '34144000',
                    name: 'Motorkjøretøyer til spesielle formål',
                    countWithoutChildren: 1,
                    countWithChildren: 31,
                    children: [
                      {
                        code: '34144200',
                        name: 'Beredskapskjøretøy',
                        countWithoutChildren: 2,
                        countWithChildren: 16,
                        children: [
                          {
                            code: '34144210',
                            name: 'Brannkjøretøyer',
                            countWithoutChildren: 5,
                            countWithChildren: 14,
                            children: [
                              {
                                code: '34144212',
                                name: 'Brannkjøretøyer med vanntank',
                                count: 3,
                              },
                              {
                                code: '34144213',
                                name: 'Brannbiler',
                                count: 6,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        code: '34144400',
                        name: 'Kjøretøyer til veivedlikehold',
                        countWithoutChildren: 2,
                        countWithChildren: 3,
                        children: [
                          {
                            code: '34144430',
                            name: 'Kjøretøyer til feiing av veier',
                            countWithoutChildren: 1,
                            countWithChildren: 1,
                            children: [],
                          },
                        ],
                      },
                      {
                        code: '34144500',
                        name: 'Kjøretøyer til avfall og kloakk',
                        countWithChildren: 6,
                        children: [
                          {
                            code: '34144510',
                            name: 'Kjøretøyer til avfall',
                            countWithoutChildren: 1,
                            countWithChildren: 6,
                            children: [
                              {
                                code: '34144512',
                                name: 'Renovasjonsvogner med komprimator',
                                count: 5,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        code: '34144700',
                        name: 'Nyttekjøretøyer',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '34144710',
                            name: 'Hjullastere',
                            countWithoutChildren: 2,
                            countWithChildren: 2,
                            children: [],
                          },
                        ],
                      },
                      {
                        code: '34144900',
                        name: 'El-kjøretøyer',
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
            name: 'Deler og tilbehør til kjøretøy og tilhørende motorer',
            countWithChildren: 2,
            children: [
              {
                code: '34350000',
                name: 'Dekk til tunge/lette kjøretøy',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '34500000',
            name: 'Skip og båter',
            countWithChildren: 3,
            children: [
              {
                code: '34510000',
                name: 'Skip',
                countWithChildren: 1,
                children: [
                  {
                    code: '34515000',
                    name: 'Flytende konstruksjoner',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '34520000',
                name: 'Båter',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
            ],
          },
          {
            code: '34900000',
            name: 'Diverse transportutstyr og reservedeler',
            countWithChildren: 8,
            children: [
              {
                code: '34920000',
                name: 'Veiutstyr',
                countWithChildren: 6,
                children: [
                  {
                    code: '34927000',
                    name: 'Utstyr til oppkreving av avgifter',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '34927100',
                        name: 'Veisalt',
                        countWithoutChildren: 2,
                        countWithChildren: 2,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '34928000',
                    name: 'Tilbehør til veier',
                    countWithChildren: 4,
                    children: [
                      {
                        code: '34928400',
                        name: 'Gatemøbler',
                        countWithChildren: 4,
                        children: [
                          {
                            code: '34928470',
                            name: 'Skilting',
                            countWithoutChildren: 1,
                            countWithChildren: 1,
                            children: [],
                          },
                          {
                            code: '34928480',
                            name: 'Søppelbeholdere og -bøtter',
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
                name: 'Kontroll-, sikkerhets- signal- og lysutstyr ',
                countWithChildren: 2,
                children: [
                  {
                    code: '34992000',
                    name: 'Skilt og opplyste skilt',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '34992200',
                        name: 'Veiskilt',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '34994000',
                    name:
                      'Belysning til veiledning og belysning av skip til havs',
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
        code: '60000000',
        name: 'Transporttjenester (bortsett fra avfallstransport)',
        countWithoutChildren: 8,
        countWithChildren: 59,
        children: [
          {
            code: '60100000',
            name: 'Veitransporttjenester',
            countWithoutChildren: 14,
            countWithChildren: 37,
            children: [
              {
                code: '60120000',
                name: 'Taxitjenester',
                countWithoutChildren: 7,
                countWithChildren: 7,
                children: [],
              },
              {
                code: '60130000',
                name: 'Spesialtjenester av veipassasjerertransport',
                countWithoutChildren: 4,
                countWithChildren: 4,
                children: [],
              },
              {
                code: '60140000',
                name: 'Passasjertransport utenfor rutetider',
                countWithoutChildren: 6,
                countWithChildren: 6,
                children: [],
              },
              {
                code: '60160000',
                name: 'Postkjøring på vei',
                countWithChildren: 2,
                children: [
                  {
                    code: '60161000',
                    name: 'Pakketransport',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '60180000',
                name: 'Utleie av kjøretøyer for godstransport med sjåfør',
                countWithoutChildren: 1,
                countWithChildren: 4,
                children: [
                  {
                    code: '60181000',
                    name: 'Utleie av lastebiler med sjåfør',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '60182000',
                    name: 'Utleie av anleggsmaskiner med sjåfør',
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
            name: 'Sjøtransport',
            countWithoutChildren: 2,
            countWithChildren: 14,
            children: [
              {
                code: '60610000',
                name: 'Fergetransport',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
              {
                code: '60650000',
                name: 'Utleie av vanntransportmidler med besetning',
                countWithChildren: 11,
                children: [
                  {
                    code: '60651000',
                    name: 'Utleie av skip med besetning',
                    countWithoutChildren: 5,
                    countWithChildren: 5,
                    children: [],
                  },
                  {
                    code: '60653000',
                    name: 'Utleie av båter med besetning',
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
          'Hjelpevirksomhet i forbindelse med transport; reisebyråvirksomhet',
        countWithChildren: 9,
        children: [
          {
            code: '63500000',
            name: 'Reisebyrå-, turoperatør- og turistveiledningstjenester',
            countWithoutChildren: 1,
            countWithChildren: 5,
            children: [
              {
                code: '63510000',
                name: 'Reisebyrå og lignende tjenester',
                countWithoutChildren: 4,
                countWithChildren: 4,
                children: [],
              },
            ],
          },
          {
            code: '63700000',
            name: 'Støttevirksomhet for land-, vann- og lufttransport',
            countWithChildren: 4,
            children: [
              {
                code: '63710000',
                name: 'Støttevirksomhet i forbindelse med landtransport',
                countWithChildren: 2,
                children: [
                  {
                    code: '63712000',
                    name: 'Støttevirksomhet i forbindelse med veitransport',
                    countWithoutChildren: 1,
                    countWithChildren: 2,
                    children: [
                      {
                        code: '63712400',
                        name: 'Drift av parkering',
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
                name: 'Støttevirksomhet i forbindelse med sjøtransport',
                countWithChildren: 1,
                children: [
                  {
                    code: '63726000',
                    name:
                      'Diverse støttetjenester i forbindelse med transport på vann',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '63730000',
                name: 'Støttetjenester i forbindelse med lufttransport',
                countWithChildren: 1,
                children: [
                  {
                    code: '63731000',
                    name: 'Lufthavnsdrift',
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
        name: 'Post- og telekommunikasjonstjenester',
        countWithChildren: 14,
        children: [
          {
            code: '64100000',
            name: 'Post- og budtjenester',
            countWithoutChildren: 2,
            countWithChildren: 3,
            children: [
              {
                code: '64110000',
                name: 'Posttjenester',
                countWithoutChildren: 1,
                countWithChildren: 1,
                children: [],
              },
            ],
          },
          {
            code: '64200000',
            name: 'Telekommunikasjonstjenester',
            countWithoutChildren: 6,
            countWithChildren: 11,
            children: [
              {
                code: '64210000',
                name: 'Telefon- og dataoverføringstjenester',
                countWithoutChildren: 2,
                countWithChildren: 5,
                children: [
                  {
                    code: '64212000',
                    name: 'Mobiltelefontjenester',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '64212100',
                        name: 'SMS tjenester (Short Message Service )',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '64214000',
                    name:
                      'Tjenester tilknyttet lukkede forretningstelefon-nettverk',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '64214400',
                        name: 'Utleie av fastlinjer',
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
    ],
  },
  {
    main: 'Kontor',
    children: [
      {
        code: '22000000',
        name: 'Trykksaker og relaterte produkter.',
        countWithoutChildren: 3,
        countWithChildren: 11,
        children: [
          {
            code: '22100000',
            name: 'Trykte bøker, brosjyrer og foldere',
            countWithoutChildren: 1,
            countWithChildren: 7,
            children: [
              {
                code: '22110000',
                name: 'Trykte bøker',
                countWithoutChildren: 2,
                countWithChildren: 6,
                children: [
                  {
                    code: '22112000',
                    name: 'Lærebøker',
                    countWithoutChildren: 3,
                    countWithChildren: 3,
                    children: [],
                  },
                  {
                    code: '22113000',
                    name: 'Biblioteksbøker',
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
              'Frimerker, sjekker, pengesedler, aksjebrev, reklametrykksaker, kataloger og håndbøker',
            countWithChildren: 1,
            children: [
              {
                code: '22460000',
                name: 'Reklametrykksaker, varekataloger og håndbøker',
                countWithChildren: 1,
                children: [
                  {
                    code: '22462000',
                    name: 'Reklamemateriale',
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
          'Kontor- og PC-maskineri, utstyr og forsyninger bortsett fra møbler og programvarepakker',
        countWithoutChildren: 3,
        countWithChildren: 25,
        children: [
          {
            code: '30100000',
            name:
              "Kontormaskineri, utstyr  og forsyninger bortsett fra PC'er, printere og møbler",
            countWithChildren: 11,
            children: [
              {
                code: '30190000',
                name: 'Diverse kontorutstyr og -materiell',
                countWithoutChildren: 5,
                countWithChildren: 11,
                children: [
                  {
                    code: '30191000',
                    name: 'Kontorutstyr bortsett fra møbler',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '30192000',
                    name: 'Kontorutstyr',
                    countWithoutChildren: 4,
                    countWithChildren: 4,
                    children: [],
                  },
                  {
                    code: '30195000',
                    name: 'Tavler',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '30195200',
                        name: 'Elektroniske tavler eller tilbehør',
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
            name: 'Datautstyr og -materiell',
            countWithoutChildren: 3,
            countWithChildren: 11,
            children: [
              {
                code: '30210000',
                name: 'Databehandlingsmaskiner (maskinvare)',
                countWithChildren: 5,
                children: [
                  {
                    code: '30213000',
                    name: 'Personlige Datamaskiner (PC)',
                    countWithoutChildren: 5,
                    countWithChildren: 5,
                    children: [],
                  },
                ],
              },
              {
                code: '30230000',
                name: 'Utstyr relatert til datamaskiner',
                countWithChildren: 3,
                children: [
                  {
                    code: '30232000',
                    name: 'Eksternt utstyr (til PCer)',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '30232100',
                        name: 'Skrivere og plottere',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '30232110',
                            name: 'Laserprintere',
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
                    name: 'Lagringsmedia',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '30238000',
                    name: 'Utstyr til biblioteksautomasjon',
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
          'Møbler (inkludert kontor møbler), inventar, husholdningsmaskiner, (utenom belysning) og rengjøringsmidler',
        countWithoutChildren: 3,
        countWithChildren: 33,
        children: [
          {
            code: '39100000',
            name: 'Møbler',
            countWithoutChildren: 8,
            countWithChildren: 16,
            children: [
              {
                code: '39130000',
                name: 'Kontormøbler',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
              {
                code: '39140000',
                name: 'Husholdningsmøbler',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '39141000',
                    name: 'Kjøkkenmøbler og utstyr',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '39141400',
                        name: 'Elementkjøkkener',
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
                name: 'Diverse møbler og utstyr',
                countWithoutChildren: 2,
                countWithChildren: 2,
                children: [],
              },
              {
                code: '39160000',
                name: 'Skolemøbler',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '39162000',
                    name: 'Pedagogisk utstyr',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '39162100',
                        name: 'Undervisningsutstyr',
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
            name: 'Inventar',
            countWithChildren: 5,
            children: [
              {
                code: '39220000',
                name:
                  'Kjøkkenutstyr, husholdningsartikler, forsyning til hjemmet og catering ',
                countWithoutChildren: 1,
                countWithChildren: 5,
                children: [
                  {
                    code: '39221000',
                    name: 'Kjøkkenutstyr',
                    countWithoutChildren: 1,
                    countWithChildren: 2,
                    children: [
                      {
                        code: '39221100',
                        name: 'Kjøkkenprodukter',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '39222000',
                    name: 'Produkter til cateringvirksomhet',
                    countWithoutChildren: 1,
                    countWithChildren: 2,
                    children: [
                      {
                        code: '39222100',
                        name: 'Engangsprodukter til cateringvirksomhet',
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
            name: 'Tekstilvarer til husholdningsbruk',
            countWithChildren: 1,
            children: [
              {
                code: '39520000',
                name: 'Ferdige tekstilvarer',
                countWithChildren: 1,
                children: [
                  {
                    code: '39522000',
                    name:
                      'Presenninger, seil til båter, seilbrett eller seilvogner, solseil, markiser, telt og campingutstyr',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '39522500',
                        name: 'Campingutstyr av tekstil',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '39522530',
                            name: 'Telt',
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
            name: 'Husholdningsapparater',
            countWithoutChildren: 1,
            countWithChildren: 3,
            children: [
              {
                code: '39710000',
                name: 'Elektriske husholdningsapparater',
                countWithChildren: 2,
                children: [
                  {
                    code: '39711000',
                    name: 'Elektriske husholdningsapparater til matvarebruk',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '39711300',
                        name: 'Elektrotermiske apparater',
                        countWithChildren: 2,
                        children: [
                          {
                            code: '39711310',
                            name: 'Elektriske kaffemaskiner',
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
            name: 'Renholds- og boningsartikler',
            countWithoutChildren: 4,
            countWithChildren: 5,
            children: [
              {
                code: '39830000',
                name: 'Rengjøringsmidler',
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
    main: 'Olje og kjemikalier',
    children: [
      {
        code: '24000000',
        name: 'Kjemikalske produkter',
        countWithChildren: 5,
        children: [
          {
            code: '24100000',
            name: 'Gasser',
            countWithoutChildren: 3,
            countWithChildren: 4,
            children: [
              {
                code: '24110000',
                name: 'Industrigasser',
                countWithChildren: 1,
                children: [
                  {
                    code: '24112000',
                    name: 'Uorganiske oksygensammensetning',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '24112100',
                        name: 'Karbondioksid',
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
            name: 'Uorganiske og organiske basiskjemikalier',
            countWithChildren: 1,
            children: [
              {
                code: '24320000',
                name: 'Basiske organiske kjemikalier',
                countWithChildren: 1,
                children: [
                  {
                    code: '24327000',
                    name: 'Diverse organiske kjemikalier',
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
        code: '38000000',
        name:
          'Laboratorie-, optisk- og presisjonsutstyr (bortsett fra briller)',
        countWithoutChildren: 21,
        countWithChildren: 39,
        children: [
          {
            code: '38100000',
            name: 'Navigasjons- og metrologiske instrumenter',
            countWithChildren: 2,
            children: [
              {
                code: '38110000',
                name: 'Navigasjonsinstrumenter',
                countWithoutChildren: 1,
                countWithChildren: 2,
                children: [
                  {
                    code: '38114000',
                    name: 'Ekkolodd',
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
            name: 'Instrumenter til kontroll av fysiske egenskaper',
            countWithoutChildren: 1,
            countWithChildren: 2,
            children: [
              {
                code: '38430000',
                name: 'Apparater til fysisk eller kjemisk analyse',
                countWithChildren: 1,
                children: [
                  {
                    code: '38434000',
                    name: 'Analysatorer',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '38434500',
                        name: 'Biokjemiske analysatorer',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '38434520',
                            name: 'Blodanalyseapparater',
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
            name: 'Apparatur til kontroll og prøving',
            countWithChildren: 11,
            children: [
              {
                code: '38510000',
                name: 'Mikroskoper',
                countWithoutChildren: 3,
                countWithChildren: 4,
                children: [
                  {
                    code: '38511000',
                    name: 'Elektronmikroskoper',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '38520000',
                name: 'Scannere',
                countWithoutChildren: 7,
                countWithChildren: 7,
                children: [],
              },
            ],
          },
          {
            code: '38600000',
            name: 'Optiske instrumenter',
            countWithChildren: 2,
            children: [
              {
                code: '38630000',
                name: 'Astronomiske og optiske instrumenter',
                countWithChildren: 1,
                children: [
                  {
                    code: '38636000',
                    name: 'Optiske spesialinstrumenter',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '38636100',
                        name: 'Lasere',
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
                name: 'Fotografisk utstyr',
                countWithChildren: 1,
                children: [
                  {
                    code: '38651000',
                    name: 'Kameraer',
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
            name: 'Diverse evaluerings- eller testinstrumenter',
            countWithChildren: 1,
            children: [
              {
                code: '38950000',
                name: 'Polymerasekjedereaksjon (PCR) utstyr',
                countWithChildren: 1,
                children: [
                  {
                    code: '38951000',
                    name: 'Sanntid polymerasekjedereaksjon (PCR) utstyr',
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
        code: '76000000',
        name: 'Tjenester i forbindelse med olje- og gass-industrien',
        countWithChildren: 2,
        children: [
          {
            code: '76100000',
            name: 'Fagtjenester knyttet til gassindustrien',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
          {
            code: '76600000',
            name: 'Inspeksjon av rørledninger',
            countWithoutChildren: 1,
            countWithChildren: 1,
            children: [],
          },
        ],
      },
      {
        code: '09000000',
        name: 'Oljeprodukter, brensel, elektrisitet og andre energikilder',
        countWithoutChildren: 1,
        countWithChildren: 31,
        children: [
          {
            code: '09100000',
            name: 'Brensel',
            countWithoutChildren: 4,
            countWithChildren: 18,
            children: [
              {
                code: '09110000',
                name: 'Fast brensel',
                countWithChildren: 2,
                children: [
                  {
                    code: '09111000',
                    name: 'Kull og kullbasert brensel',
                    countWithChildren: 2,
                    children: [
                      {
                        code: '09111400',
                        name: 'Trebrensel',
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
                name: 'Petroleum og destillater',
                countWithoutChildren: 1,
                countWithChildren: 12,
                children: [
                  {
                    code: '09135000',
                    name: 'Brenselsoljer',
                    countWithoutChildren: 1,
                    countWithChildren: 2,
                    children: [
                      {
                        code: '09135100',
                        name: 'Fyringsolje',
                        countWithoutChildren: 1,
                        countWithChildren: 1,
                        children: [],
                      },
                    ],
                  },
                  {
                    code: '09134000',
                    name: 'Gassoljer',
                    countWithChildren: 7,
                    children: [
                      {
                        code: '09134200',
                        name: 'Dieseldrivstoff',
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
                    name: 'Bensin',
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
            name: 'Elektrisitet, oppvarming, solenergi og kjernefysisk energi',
            countWithoutChildren: 2,
            countWithChildren: 12,
            children: [
              {
                code: '09310000',
                name: 'Elektrisitet',
                countWithoutChildren: 10,
                countWithChildren: 10,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    main: 'Offentlige ytelser',
    children: [
      {
        code: '75000000',
        name: 'Offentlig administrasjon, forsvars og trygdetjenester',
        countWithChildren: 5,
        children: [
          {
            code: '75200000',
            name: 'Samfunnstjenester',
            countWithChildren: 5,
            children: [
              {
                code: '75230000',
                name: 'Rettstjenester',
                countWithChildren: 2,
                children: [
                  {
                    code: '75231000',
                    name: 'Juridiske tjenester',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '75240000',
                name: 'Tjenester vedrørende allmenn sikkerhet, lov og orden',
                countWithChildren: 2,
                children: [
                  {
                    code: '75241000',
                    name: 'Tjenester i forbindelse med allmenn sikkerhet',
                    countWithoutChildren: 2,
                    countWithChildren: 2,
                    children: [],
                  },
                ],
              },
              {
                code: '75250000',
                name: 'Brannvesen og redningstjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '75251000',
                    name: 'Tjenester utført av brannvesenet',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '75251100',
                        name: 'Brannbekjempelse',
                        countWithChildren: 1,
                        children: [
                          {
                            code: '75251110',
                            name: 'Brannforebygging',
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
        code: '98000000',
        name: 'Andre kommunale, sosiale og personlige tjenester',
        countWithoutChildren: 1,
        countWithChildren: 20,
        children: [
          {
            code: '98300000',
            name: 'Diverse tjenesteytelser',
            countWithChildren: 19,
            children: [
              {
                code: '98310000',
                name: 'Vask og rensing',
                countWithoutChildren: 10,
                countWithChildren: 11,
                children: [
                  {
                    code: '98311000',
                    name: 'Innsamling av vasketøy',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '98350000',
                name: 'Offentlige kultur- og fritidstjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '98351000',
                    name: 'Parkeringsforvaltning',
                    countWithChildren: 1,
                    children: [
                      {
                        code: '98351100',
                        name: 'Bilparkeringstjenester',
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
                name: 'Maritime tjenester',
                countWithChildren: 1,
                children: [
                  {
                    code: '98363000',
                    name: 'Dykking',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                ],
              },
              {
                code: '98390000',
                name: 'Andre tjenester',
                countWithoutChildren: 1,
                countWithChildren: 6,
                children: [
                  {
                    code: '98392000',
                    name: 'Omlokaliseringstjenester',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '98394000',
                    name: 'Møbeltapetsering',
                    countWithoutChildren: 1,
                    countWithChildren: 1,
                    children: [],
                  },
                  {
                    code: '98395000',
                    name: 'Låsesmedtjenester',
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
    ],
  },
]
export default structure
