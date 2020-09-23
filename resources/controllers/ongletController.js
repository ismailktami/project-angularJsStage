
app.controller("ongletController",function($scope,$timeout){


    var loadOnglets=function(){    
        
        return [
            {name:'SYNTHÈSE TECHNIQUE',id:'id1',activer:"active",
            sous_onglets:[
                {name:"SYNTHÈSE",id:"id11",activer:"active",

                blocs:[
                    {name:'PROVISIONING',id:'id1',
                    indicateurs:[
                        {
                            id: 533,
                            name: "Statut commercial",
                            xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[1]",
                            order_element: 0,
                            valeur: "Actif - 16/08/2018",
                            code_datalib: "ODAD_Info_53",
                            selector_label: null,
                            selector_value: null,clients:[],
                            regle: null,
                            indicateur_a_afficher: null,
                            value_found: null,
                            class_style: null,
                            clients:[
                                {technologie:'FTTH',type_of_abonnement:'3P'},
                                {technologie:'FTTH',type_of_abonnement:'2P'},
                                {technologie:'FTTH',type_of_abonnement:'1P'},

                            ]
                            
                            },
                            {
                            id: 534,
                            name: "Etat de la ligne",
                            xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[2]",
                            order_element: 0,
                            valeur: "Ouverte",
                            code_datalib: "ODAD_Info_DUP_12",
                            selector_label: null,
                            selector_value: null,clients:[],
                            regle: null,
                            indicateur_a_afficher: null,
                            value_found: null,
                            class_style: null,
                            clients:[
                                {technologie:'FTTH',type_of_abonnement:'3P'},
                                {technologie:'FTTH',type_of_abonnement:'2P'},      
                                                          {technologie:'FTTH',type_of_abonnement:'1P'}

                            ]
                            }
                    ],
                    indicateurs_sets:[
                        
                    ],

                    sous_blocs:[{
                        id: 535,
                        name: "BBOX",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[3]",
                        order_element: 0,
                        valeur: null,
                        size_element: 0,
                        iid: "SYNTHESE_PROVISIONING_BBOX_CO",
                        description: null,
                        indicateurs: [
                        {
                        id: 536,
                        name: "IMEI",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[3]/div[2]",
                        order_element: 0,
                        valeur: "124601807114851",
                        code_datalib: "ODAD_Info_IAD_72",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 537,
                        name: "Statut",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[3]/div[3]",
                        order_element: 0,
                        valeur: "Expédition confirmée",
                        code_datalib: "ODAD_Info_IAD_74",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 538,
                        name: "Date Statut",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[3]/div[4]",
                        order_element: 0,
                        valeur: "21 févr. 2020",
                        code_datalib: "ODAD_Info_IAD_75",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        }
                        ],
                        indicateur_sets: [ ]
                        },
                        {
                        id: 539,
                        name: "BBOXTV",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[4]",
                        order_element: 0,
                        valeur: null,
                        size_element: 0,
                        iid: "SYNTHESE_PROVISIONING_BBOXTV_CO",
                        description: null,
                        indicateurs: [
                        {
                        id: 540,
                        name: "IMEI",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[4]/div[2]",
                        order_element: 0,
                        valeur: "271011746403038",
                        code_datalib: "ODAD_Info_STB_72",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 541,
                        name: "Statut",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[4]/div[3]",
                        order_element: 0,
                        valeur: "Expédition confirmée",
                        code_datalib: "ODAD_Info_STB_74",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 542,
                        name: "Date Statut",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[4]/div[4]",
                        order_element: 0,
                        valeur: "21 févr. 2020",
                        code_datalib: "ODAD_Info_STB_75",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        }
                        ],
                        indicateur_sets: [ ]
                        },
                        {
                        id: 543,
                        name: "ONT",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[5]",
                        order_element: 0,
                        valeur: null,
                        size_element: 0,
                        iid: "SYNTHESE_PROVISIONING_BTO_CO",
                        description: null,
                        indicateurs: [
                        {
                        id: 544,
                        name: "IMEI",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[5]/div[2]",
                        order_element: 0,
                        valeur: "181061746436172",
                        code_datalib: "ODAD_Info_ONT_72",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 545,
                        name: "Statut",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[5]/div[3]",
                        order_element: 0,
                        valeur: "Expédition confirmée",
                        code_datalib: "ODAD_Info_ONT_74",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 546,
                        name: "Date Statut",
                        xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[5]/div[4]",
                        order_element: 0,
                        valeur: "21 févr. 2020",
                        code_datalib: "ODAD_Info_ONT_75",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        }
                        ],
                        indicateur_sets: [ ]
                        }]


                }
                    //Bloc1
                    ,

                    //Bloc2

                    {name:'RÉSEAU',id:'id2',
                        indicateurs:null,

                        indicateurs_sets:[],
                        sous_blocs:[
                           

                            {
                                id: 548,
                                name: "Tickets Sentor CO",
                                xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[5]",
                                order_element: 0,
                                valeur: null,
                                size_element: 0,
                                iid: "SYNTHESIS_TICKETS_CO_SENTOR_CO_2",
                                description: null,
                                indicateurs: [
                                {
                                id: 549,
                                name: "Ouverts",
                                xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[5]/div[2]",
                                order_element: 0,
                                valeur: "0",
                                code_datalib: "ODAD_Synth_Ticket_CO_DUP_06",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 550,
                                name: "Fermés (8 derniers jours)",
                                xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[5]/div[3]",
                                order_element: 0,
                                valeur: "0",
                                code_datalib: "ODAD_Synth_Ticket_CO_DUP_08",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                }
                                ],
                                indicateur_sets: [ ]
                                },
                        
                                {
                                id: 924,
                                name: "Interventions Client",
                                xpath: "//*[@id=SYNTHESIS_NETWORK]/div[2]/div[7]",
                                order_element: 0,
                                valeur: null,
                                size_element: 0,
                                iid: "INTERVENTION_SAV_RACCO",
                                description: null,
                                indicateurs: [
                                {
                                id: 931,
                                name: "Installation:",
                                xpath: null,
                                order_element: 0,
                                valeur: "3",
                                code_datalib: "ODAD_FTTH_INTER_INST",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: {
                                id: 925,
                                name: "RDV",
                                xpath: "ODAD_FTTH_INSTALL_01",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_INSTALL_01",
                                value: null,
                                clicakble: false,
                                iid: null,
                                repeter: false,
                                indicateurSimples: [
                                {
                                id: 926,
                                name: "ID RDV:",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_INSTALL_02",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 927,
                                name: "Société",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_INSTALL_03",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 928,
                                name: "Résultat",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_INSTALL_04",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 929,
                                name: "Nbre de modification",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_INSTALL_05",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 930,
                                name: "Date dernière modif",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_INSTALL_06",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                }
                                ]
                                },
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 936,
                                name: "SAV:",
                                xpath: null,
                                order_element: 0,
                                valeur: "0",
                                code_datalib: "ODAD_FTTH_INTER_SAV",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: {
                                id: 932,
                                name: "RDV",
                                xpath: "ODAD_FTTH_INSTALL_01",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_INSTALL_01",
                                value: null,
                                clicakble: false,
                                iid: null,
                                repeter: false,
                                indicateurSimples: [
                                {
                                id: 933,
                                name: "Société:",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_SAV_02",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 934,
                                name: "Résultat",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_SAV_03",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 935,
                                name: "Facturation",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_SAV_04",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                }
                                ]
                                },
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 943,
                                name: "Qualité:",
                                xpath: null,
                                order_element: 0,
                                valeur: "0",
                                code_datalib: "ODAD_INTER_QUALITE_COUNT",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: {
                                id: 937,
                                name: "RDV",
                                xpath: "ODAD_QU_INTER_DATE",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_QU_INTER_DATE",
                                value: null,
                                clicakble: false,
                                iid: null,
                                repeter: false,
                                indicateurSimples: [
                                {
                                id: 938,
                                name: "ID RDV:",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_QU_02",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 939,
                                name: "Société",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_QU_03",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 940,
                                name: "Résultat",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_QU_04",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 941,
                                name: "Nbre de modification",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_QU_05",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                },
                                {
                                id: 942,
                                name: "Date dernière modif",
                                xpath: "null",
                                order_element: 0,
                                valeur: null,
                                code_datalib: "ODAD_FTTH_QU_06",
                                selector_label: null,
                                selector_value: null,clients:[],
                                regle: null,
                                indicateur_a_afficher: null,
                                value_found: null,
                                class_style: null
                                }
                                ]
                                },
                                value_found: null,
                                class_style: null
                                }
                                ],
                                indicateur_sets: [ ]
                                }


                        ]



                    },

                    //Bloc2


                    //Bloc3

                    {name:'DOMICILE',id:'id3',
                        indicateurs:[
                          {id: 567,
                            name: "Adresse ligne",
                            xpath: "//*[@id=SYNTHESIS_HOME_CO]/div[2]/div",
                            order_element: 0,
                            valeur: "57 RUE DE LA ROCHEFOUCAULD 92100 BOULOGNE BILLANCOURT Batiment _NA_, Etage 2, Escalier C",
                            code_datalib: "ODAD_Info_09",
                            selector_label: null,
                            selector_value: null,clients:[],
                            regle: null,
                            indicateur_a_afficher: null,
                            value_found: null,
                            class_style: null
                        
                        ,clients: [
                            {
                                id: 39,
                                technologie: "FTTH",
                                type_of_abonnement: "3P"
                                },
                                {
                                id: 40,
                                technologie: "ADSL",
                                type_of_abonnement: "3P"
                                },
                                {
                                id: 41,
                                technologie: "ADSL",
                                type_of_abonnement: "2P"
                                }
                        ]
                        }

                        ],indicateurs_sets:[],sous_blocs:[]

                    }]
                    //Bloc3]

                },
                {

                    id: 49,
                    name: "ACCES",
                    xpath: "file:///C:/Users/ismail%20ktami/Desktop/S%20T/ODAD%20Tech%20360%20-%20acces.html",
                    order_element: 0,
                    valeur: null,
                    blocs: [
                    {
                    id: 50,
                    name: "OLT",
                    xpath: "//*[@id='OLT_FTTH']",
                    order_element: 0,
                    valeur: null,
                    sous_blocs: [ ],
                    indicateurs: [
                        {
                        id: 51,
                        name: "Nom de l'OLT",
                        xpath: "//*[@id=OLT_FTTH]/div[2]/div[1]",
                        order_element: 0,
                        valeur: "OLT0126",
                        code_datalib: "ODAD_Acces_FTTH_01",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 52,
                        name: "Constructeur",
                        xpath: "//*[@id=OLT_FTTH]/div[2]/div[2]",
                        order_element: 0,
                        valeur: "NOKIA",
                        code_datalib: "ODAD_Acces_FTTH_53",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 54,
                        name: "Type de Slot",
                        xpath: "//*[@id=OLT_FTTH]/div[2]/div[4]",
                        order_element: 0,
                        valeur: "PON",
                        code_datalib: "ODAD_Acces_FTTH_55",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 55,
                        name: "Slot",
                        xpath: "//*[@id=OLT_FTTH]/div[2]/div[5]",
                        order_element: 0,
                        valeur: "2",
                        code_datalib: "ODAD_Acces_FTTH_03",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 56,
                        name: "Port",
                        xpath: "//*[@id=OLT_FTTH]/div[2]/div[6]",
                        order_element: 0,
                        valeur: "6",
                        code_datalib: "ODAD_Acces_FTTH_04",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 57,
                        name: "Ont Id",
                        xpath: "//*[@id=OLT_FTTH]/div[2]/div[7]",
                        order_element: 0,
                        valeur: "21",
                        code_datalib: "ODAD_Acces_FTTH_34",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 58,
                        name: "Type de zone",
                        xpath: "//*[@id=OLT_FTTH]/div[2]/div[8]",
                        order_element: 0,
                        valeur: "ZTD Haute densité",
                        code_datalib: "ODAD_Acces_FTTH_35",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        }
                        ],
                                            indicateurSets: [ ]
                    },
                    {
                    id: 59,
                    name: "SYNCHRONISATION",
                    xpath: "//*[@id='ACCES_SYNCHRONISATION_FTTH']",
                    order_element: 0,
                    valeur: null,
                    sous_blocs: [],
                    indicateurs: [
                        {
                        id: 60,
                        name: "Etat synchro",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[1]",
                        order_element: 0,
                        valeur: "OK",
                        code_datalib: "ODAD_NA_ONT_OPERATIONNEL_STATE",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 61,
                        name: "ONT Eteint",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[2]",
                        order_element: 0,
                        valeur: "Non",
                        code_datalib: "ODAD_NA_LINK_STATUS",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 62,
                        name: "Statut port",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[3]",
                        order_element: 0,
                        valeur: "OK",
                        code_datalib: "ODAD_Acces_FTTH_26",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 63,
                        name: "Etat Administratif",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[4]",
                        order_element: 0,
                        valeur: "OK",
                        code_datalib: "ODAD_Acces_FTTH_Admin",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 64,
                        name: "Etat carte",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[5]",
                        order_element: 0,
                        valeur: "OK",
                        code_datalib: "ODAD_Acces_FTTH_Carte",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 65,
                        name: "Débit max théorique up (Mbps)",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[6]",
                        order_element: 0,
                        valeur: "500",
                        code_datalib: "ODAD_DEBIT_UP_OLT",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 66,
                        name: "Débit max théorique down (Mbps)",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[7]",
                        order_element: 0,
                        valeur: "1000",
                        code_datalib: "ODAD_DEBIT_OLT",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 67,
                        name: "Qualité Ligne en Temps réel",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[8]",
                        order_element: 0,
                        valeur: "Bonne",
                        code_datalib: "ODAD_NAF_Q_TEMPS_REEL",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 68,
                        name: "Qualité Ligne sur les 24 dernières heures",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[9]",
                        order_element: 0,
                        valeur: "Bonne",
                        code_datalib: "ODAD_NAF_Q_DERNIERE_24_HEURES",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 69,
                        name: "Qualité Ligne sur les 3 derniers jours",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[10]",
                        order_element: 0,
                        valeur: "Bonne",
                        code_datalib: "ODAD_NAF_Q_DERNIER_3_JOURS",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 70,
                        name: "Stabilité ligne sur les 24 dernières heures",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]div[2]/div[11]",
                        order_element: 0,
                        valeur: "Non disponible",
                        code_datalib: "ODAD_NAF_STABILITE_EVALUEE",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 71,
                        name: "Stabilité Ligne sur les 3 derniers jours",
                        xpath: "//*[@id=ACCES_SYNCHRONISATION_FTTH]/div[2]/div[12]",
                        order_element: 0,
                        valeur: "Non disponible",
                        code_datalib: "ODAD_NAF_STABILITE_EVALUEE_3_JOURS",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        }
                        ],                    indicateurSets: [ ]
                    },
                    {
                    id: 83,
                    name: "ROUTE OPTIQUE",
                    xpath: "//*[@id='ROUTE_OPTIQUE']",
                    order_element: 0,
                    valeur: null,
                    sous_blocs: [],
                    indicateurs: [
                        {
                        id: 85,
                        name: "Référence",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[2]",
                        order_element: 0,
                        valeur: "FI-92012-2VVQ",
                        code_datalib: "ODAD_Acces_FTTH_07",
                        selector_label: null,
                        selector_value: null,
                        clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 86,
                        name: "Adresse",
                        xpath: "//*[@id=ROUTE_OPTIQU]/div[2]/div[1]/div[3]",
                        order_element: 0,
                        valeur: "57 RUE DE LA ROCHEFOUCAULD 92012 BOULOGNE BILLANCOURT",
                        code_datalib: "ODAD_Acces_FTTH_09",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 87,
                        name: "Donnée accès",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[4]",
                        order_element: 0,
                        valeur: "21",
                        code_datalib: "ODAD_Acces_FTTH_34",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 88,
                        name: "Coupleur",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[5]",
                        order_element: 0,
                        valeur: "SPL-1*8-01-BOUY",
                        code_datalib: "ODAD_Acces_FTTH_08",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 89,
                        name: "ID panneau",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[6]",
                        order_element: 0,
                        valeur: "B1-M1-MODULE-HZTL-BOUY",
                        code_datalib: "ODAD_Acces_FTTH_19",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 90,
                        name: "Port",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[7]",
                        order_element: 0,
                        valeur: "5",
                        code_datalib: "ODAD_Acces_FTTH_33",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 91,
                        name: "Nom du module OI",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[8]",
                        order_element: 0,
                        valeur: "PT 0440",
                        code_datalib: "ODAD_Acces_FTTH_21",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 92,
                        name: "Position module",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[9]",
                        order_element: 0,
                        valeur: "Bloc Client#1/Connecteur 014",
                        code_datalib: "ODAD_Acces_FTTH_22",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 93,
                        name: "Opérateur horizontal",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[10]",
                        order_element: 0,
                        valeur: "ZTD SFR",
                        code_datalib: "ODAD_Acces_FTTH_52",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 94,
                        name: "ID liaison",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[11]",
                        order_element: 0,
                        valeur: "B_FI-92012-2VVQ_1",
                        code_datalib: "ODAD_Acces_FTTH_36",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 95,
                        name: "Référence câble Module PM",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[12]",
                        order_element: 0,
                        valeur: "TR 07 0470",
                        code_datalib: "ODAD_Acces_FTTH_37",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 96,
                        name: "Besoin accord gestionnaire",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[13]",
                        order_element: 0,
                        valeur: "Oui",
                        code_datalib: "ODAD_Acces_FTTH_38",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 97,
                        name: "Autres informations",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[14]",
                        order_element: 0,
                        valeur: "-",
                        code_datalib: "ODAD_Acces_FTTH_39",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 98,
                        name: "Commentaire PM",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[15]",
                        order_element: 0,
                        valeur: "-",
                        code_datalib: "ODAD_Acces_FTTH_40",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 99,
                        name: "Type Projection Geographique",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[16]",
                        order_element: 0,
                        valeur: "-",
                        code_datalib: "ODAD_Acces_FTTH_41",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 100,
                        name: "Coordonnée PM X",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[17]",
                        order_element: 0,
                        valeur: "-",
                        code_datalib: "ODAD_Acces_FTTH_42",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 101,
                        name: "Coordonnée PM Y",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[18]",
                        order_element: 0,
                        valeur: "-",
                        code_datalib: "ODAD_Acces_FTTH_43",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 102,
                        name: "Type PM",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[19]",
                        order_element: 0,
                        valeur: "PMI",
                        code_datalib: "ODAD_Acces_FTTH_44",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 103,
                        name: "Type Ingénierie",
                        xpath: "//*[@id=ROUTE_OPTIQUE]/div[2]/div[1]/div[20]",
                        order_element: 0,
                        valeur: "Mono",
                        code_datalib: "ODAD_Acces_FTTH_45",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        }
                        ]
                    ,
                    indicateurSets: [ ]
                    }
                    ]

                },
                {
                    id: 170,
                    name: "CONNEXION",
                    xpath: "file:///C:/Users/ismail%20ktami/Desktop/S%20T/ODAD%20Tech%20360%20-%20connexion.html",
                    order_element: 0,
                    valeur: null,
                    clients: [ ],
                    blocs: [
                    {
                    id: 171,
                    name: "SESSION",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_SESSION]",
                    order_element: 0,
                    valeur: null,
                    clients: [ ],
                    sous_blocs: [
                    {
                    id: 172,
                    name: "Walled_garden",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_SESSION]/div[2]/div[3]",
                    order_element: 0,
                    valeur: null,
                    clients: [ ],
                    size_element: 0,
                    iid: "CONNEXION_FTTH_V2_WG",
                    description: null,
                    indicateurs: [
                    {
                    id: 173,
                    name: "Etat",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_SESSION]/div[2]/div[3]/div[2]",
                    order_element: 0,
                    valeur: "Non disponible",
                    clients: [
                    {
                    id: 73,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_Cnx_FTTH_10",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 174,
                    name: "IP",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_SESSION]/div[2]/div[3]/div[3]",
                    order_element: 0,
                    valeur: "Non disponible",
                    clients: [
                    {
                    id: 73,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_Cnx_FTTH_14",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateur_sets: [ ]
                    }
                    ],
                    indicateurs: [ ],
                    indicateurSets: [ ]
                    },
                    {
                    id: 175,
                    name: "CONNEXION",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_CNX]",
                    order_element: 0,
                    valeur: null,
                    clients: [ ],
                    sous_blocs: [ ],
                    indicateurs: [
                    {
                    id: 176,
                    name: "Etat de connexion",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_CNX]/div[2]/div[1]",
                    order_element: 0,
                    valeur: "OK",
                    clients: [
                    {
                    id: 74,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_Cnx_FTTH_06",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 177,
                    name: "IP Cible",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_CNX]/div[2]/div[2]",
                    order_element: 0,
                    valeur: "176.175.74.125",
                    clients: [
                    {
                    id: 74,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_Cnx_FTTH_03",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 178,
                    name: "Dernière IP ACS",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_CNX]/div[2]/div[3]",
                    order_element: 0,
                    valeur: "176.175.74.125",
                    clients: [
                    {
                    id: 74,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_Cnx_ADSL_34",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 179,
                    name: "Cohérence IP",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_CNX]/div[2]/div[4]",
                    order_element: 0,
                    valeur: "OK",
                    clients: [
                    {
                    id: 74,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_Cnx_FTTH_IPV4",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateurSets: [ ]
                    },
                    {
                    id: 183,
                    name: "IPV6",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_IPV6]",
                    order_element: 0,
                    valeur: null,
                    clients: [ ],
                    sous_blocs: [
                    {
                    id: 184,
                    name: "Collecte",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_IPV6]/div[2]/div[1]",
                    order_element: 0,
                    valeur: null,
                    clients: [ ],
                    size_element: 0,
                    iid: "CONNEXION_FTTH_V2_IPV6_COLLECTE",
                    description: null,
                    indicateurs: [
                    {
                    id: 185,
                    name: "Collecte compatible IPv6",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_IPV]/div[2]/div[1]/div[2]",
                    order_element: 0,
                    valeur: "Non",
                    clients: [
                    {
                    id: 77,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_COLLECTE_COMPATIBLE_IPV6",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateur_sets: [ ]
                    },
                    {
                    id: 186,
                    name: "BBOX",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_IPV6]/div[2]/div[2]",
                    order_element: 0,
                    valeur: null,
                    clients: [ ],
                    size_element: 0,
                    iid: "CONNEXION_FTTH_V2_IPV6_BOX",
                    description: null,
                    indicateurs: [
                    {
                    id: 187,
                    name: "Box compatible IPv6",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_IPV6]/div[2]/div[2]/div[2]",
                    order_element: 0,
                    valeur: "Oui",
                    clients: [
                    {
                    id: 78,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_BOX_COMPATIBLE_IPV6",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 188,
                    name: "Préfixe IPv6 ACS",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_IPV6]/div[2]/div[2]/div[3]",
                    order_element: 0,
                    valeur: "-",
                    clients: [
                    {
                    id: 78,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_IAD_BYTEL_PD_IPV6_ACS",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 189,
                    name: "Préfixe diffusé dans le LAN",
                    xpath: "//*[@id=CONNEXION_FTTH_V2_IPV6]/div[2]/div[2]/div[4]",
                    order_element: 0,
                    valeur: "Non",
                    clients: [
                    {
                    id: 78,
                    technologielogie: "FTTH",
                    type_of_abonnement: "3P"
                    }
                    ],
                    code_datalib: "ODAD_IAD_BYTEL_LAN_PD_IPV6",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateur_sets: [ ]
                    }
                    ],
                    indicateurs: [ ],
                    indicateurSets: [ ]
                    }
                    ]
                    }, 
                {name:"TÉLÉVISION",id:"id14"},
                {name:"TÉLÉPHONIE",id:"id15"},            
                {name:"ONT",id:"id172"},
                {name:"BBOX TV",id:"id137",
             blocs:[
                    {name:'INFORMATION',id:'id1',
                    indicateurs:[
                        {id:1,name:'indicateur1',code_datalib:'code1',xpath:'xpath1',
                    
                        clients:[
                            {technologie:'FTTH',type_of_abonnement:'3P'},
                            {technologie:'FTTH',type_of_abonnement:'1P'},

                        ]
                    
                    },
                        {id:2,name:'indicateur2',code_datalib:'code2',xpath:'xpath2'},
                        {id:3,name:'indicateur3',code_datalib:'code3',xpath:'xpath3'}
                    ],
                    indicateurs_sets:[
                        {name:"indicateurSet1",xpath:"xpath111",code_datalib:"code1_set",indicateurs:[
                            {id:1,name:'indicateur77',code_datalib:'code1set',xpath:'xpath1set'},
                            {id:2,name:'indicateur78',code_datalib:'code2set',xpath:'xpath2set'},
                            {id:3,name:'indicateur79',code_datalib:'code3set',xpath:'xpath3set'}
                        ]}
                    ],

                    sous_blocs:[]


                }
                    //Bloc1
                    ,

                    //Bloc2

                    {name:'ETAT (VUE ACS)',id:'id2',
                        indicateurs:[
                            {id:4,name:'indicateur4',code_datalib:'code4',xpath:'xpath4'},
                            {id:5,name:'indicateur5',code_datalib:'code5',xpath:'xpath5'},
                            {id:6,name:'indicateur6',code_datalib:'code6',xpath:'xpath6'}

                        ],

                        indicateurs_sets:[],
                        sous_blocs:[
                            {id:447,name:"sous_bloc1",iid:"iddd",
                            indicateurs:[
                                {id:475,name:'indicateur7s7',code_datalib:'code1sous_bloc',xpath:'xpath1sb'},
                                {id:255,name:'indicateur7s8',code_datalib:'code1sous_bloc',xpath:'xpath2sb'},
                                {id:33,name:'indicateur7s9',code_datalib:'code1sous_bloc',xpath:'xpath3sb'}
                            ]}
                        ]



                    },

                    //Bloc2


                    //Bloc3

                    {name:'QUALITÉ TV / PROFIL TV',id:'id3',
                        indicateurs:[
                            {id:7,name:'indicateur7',code_datalib:'code7',xpath:'xpath7'},
                            {id:8,name:'indicateur8',code_datalib:'code8',xpath:'xpath8'},
                            {id:9,name:'indicateur9',code_datalib:'code9',xpath:'xpath9'}

                        ],indicateurs_sets:[],sous_blocs:[]

                    }]
                    //Bloc3]]
            },
                {name:"DOMICILE",id:"id172"},
                {name:"PROVISIONING",id:"id172"},
                {name:"RÉSEAU",id:"id172"},
                

            ]
        
            },
            {name:'SYNTHÈSE COMMANDE',id:'id2',
            sous_onglets:[
                {
                    id: 531,
                    name: "SYNTHÈSE",
                    xpath: "file:///D:/Capgemini/synth%C3%A8se_commande/synth%C3%A8se.html",
                    order_element: 0,
                    valeur: null,
                    blocs: [
                    {
                    id: 532,
                    name: "PROVISIONING",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]",
                    order_element: 0,
                    valeur: null,
                    sous_blocs: [
                    {
                    id: 535,
                    name: "BBOX",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[3]",
                    order_element: 0,
                    valeur: null,
                    size_element: 0,
                    iid: "SYNTHESE_PROVISIONING_BBOX_CO",
                    description: null,
                    indicateurs: [
                    {
                    id: 536,
                    name: "IMEI",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[3]/div[2]",
                    order_element: 0,
                    valeur: "124601807114851",
                    code_datalib: "ODAD_Info_IAD_72",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 537,
                    name: "Statut",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[3]/div[3]",
                    order_element: 0,
                    valeur: "Expédition confirmée",
                    code_datalib: "ODAD_Info_IAD_74",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 538,
                    name: "Date Statut",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[3]/div[4]",
                    order_element: 0,
                    valeur: "21 févr. 2020",
                    code_datalib: "ODAD_Info_IAD_75",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateur_sets: [ ]
                    },
                    {
                    id: 539,
                    name: "BBOXTV",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[4]",
                    order_element: 0,
                    valeur: null,
                    size_element: 0,
                    iid: "SYNTHESE_PROVISIONING_BBOXTV_CO",
                    description: null,
                    indicateurs: [
                    {
                    id: 540,
                    name: "IMEI",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[4]/div[2]",
                    order_element: 0,
                    valeur: "271011746403038",
                    code_datalib: "ODAD_Info_STB_72",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 541,
                    name: "Statut",
                    xpath: "//*[@id=YNTHESIS_PROVISIONING_CO]/div[2]/div[4]/div[3]",
                    order_element: 0,
                    valeur: "Expédition confirmée",
                    code_datalib: "ODAD_Info_STB_74",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 542,
                    name: "Date Statut",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[4]/div[4]",
                    order_element: 0,
                    valeur: "21 févr. 2020",
                    code_datalib: "ODAD_Info_STB_75",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateur_sets: [ ]
                    },
                    {
                    id: 543,
                    name: "ONT",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[5]",
                    order_element: 0,
                    valeur: null,
                    size_element: 0,
                    iid: "SYNTHESE_PROVISIONING_BTO_CO",
                    description: null,
                    indicateurs: [
                    {
                    id: 544,
                    name: "IMEI",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[5]/div[2]",
                    order_element: 0,
                    valeur: "181061746436172",
                    code_datalib: "ODAD_Info_ONT_72",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 545,
                    name: "Statut",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[5]/div[3]",
                    order_element: 0,
                    valeur: "Expédition confirmée",
                    code_datalib: "ODAD_Info_ONT_74",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 546,
                    name: "Date Statut",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[5]/div[4]",
                    order_element: 0,
                    valeur: "21 févr. 2020",
                    code_datalib: "ODAD_Info_ONT_75",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateur_sets: [ ]
                    }
                    ],
                    indicateurs: [
                    {
                    id: 533,
                    name: "Statut commercial",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[1]",
                    order_element: 0,
                    valeur: "Actif - 16/08/2018",
                    code_datalib: "ODAD_Info_53",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 534,
                    name: "Etat de la ligne",
                    xpath: "//*[@id=SYNTHESIS_PROVISIONING_CO]/div[2]/div[2]",
                    order_element: 0,
                    valeur: "Ouverte",
                    code_datalib: "ODAD_Info_DUP_12",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateurSets: [ ]
                    },
                    {
                    id: 547,
                    name: "RÉSEAU",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]",
                    order_element: 0,
                    valeur: null,
                    sous_blocs: [
                    {
                    id: 548,
                    name: "Tickets Sentor CO",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[5]",
                    order_element: 0,
                    valeur: null,
                    size_element: 0,
                    iid: "SYNTHESIS_TICKETS_CO_SENTOR_CO_2",
                    description: null,
                    indicateurs: [
                    {
                    id: 549,
                    name: "Ouverts",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[5]/div[2]",
                    order_element: 0,
                    valeur: "0",
                    code_datalib: "ODAD_Synth_Ticket_CO_DUP_06",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 550,
                    name: "Fermés (8 derniers jours)",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[5]/div[3]",
                    order_element: 0,
                    valeur: "0",
                    code_datalib: "ODAD_Synth_Ticket_CO_DUP_08",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateur_sets: [ ]
                    },
                    {
                    id: 554,
                    name: "Tickets SNOW",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]",
                    order_element: 0,
                    valeur: null,
                    size_element: 0,
                    iid: "SYNTHESIS_TICKETS_SNOW_CO",
                    description: null,
                    indicateurs: [ ],
                    indicateur_sets: [
                    {
                    id: 555,
                    name: "Co",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[2]",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_SNOW_TICKET_CO",
                    value: null,
                    clicakble: false,
                    iid: "05d9f564-70c6-11ea-b92e-0050568bcf2d",
                    repeter: false,
                    indicateurSimples: [
                    {
                    id: 556,
                    name: "Ouverts",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[2]/table/tbody/tr[2]/td/div/div/div[1]",
                    order_element: 0,
                    valeur: "0",
                    code_datalib: "ODAD_SNOW_Synth_Ticket_06_CO",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 557,
                    name: "Fermés",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[2]/table/tbody/tr[2]/td/div/div/div[2]",
                    order_element: 0,
                    valeur: "0",
                    code_datalib: "ODAD_SNOW_Synth_Ticket_08_CO",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ]
                    },
                    {
                    id: 558,
                    name: "SAV",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[3]",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_SNOW_TICKET_SAV",
                    value: null,
                    clicakble: false,
                    iid: "7dd2fc3f-692d-11e9-92cb-0050568b0734",
                    repeter: false,
                    indicateurSimples: [
                    {
                    id: 559,
                    name: "Ouverts",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[3]/table/tbody/tr[2]/td/div/div/div[1]",
                    order_element: 0,
                    valeur: "0",
                    code_datalib: "ODAD_SNOW_Synth_Ticket_06",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 560,
                    name: "Fermés",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[3]/table/tbody/tr[2]/td/div/div/div[2]",
                    order_element: 0,
                    valeur: "1",
                    code_datalib: "ODAD_SNOW_Synth_Ticket_08",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 561,
                    name: "Délai dernière Interv",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[3]/table/tbody/tr[2]/td/div/div/div[3]",
                    order_element: 0,
                    valeur: "Pas d’intervention",
                    code_datalib: "ODAD_SNOW_DELAI_DERNIER_INTERV_FTTH",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ]
                    },
                    {
                    id: 562,
                    name: "Qualité",
                    xpath: "//*[@id=YNTHESIS_NETWORK_CO]/div[2]/div[7]/div[4]",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_SNOW_TICKET_QU",
                    value: null,
                    clicakble: false,
                    iid: "7d4f32d9-692d-11e9-92cb-0050568b0734",
                    repeter: false,
                    indicateurSimples: [
                    {
                    id: 563,
                    name: "Ouverts",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[4]/table/tbody/tr[2]/td/div/div/div[1]",
                    order_element: 0,
                    valeur: "0",
                    code_datalib: "ODAD_SNOW_Synth_Ticket_06_QU",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 564,
                    name: "Fermés",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[4]/table/tbody/tr[2]/td/div/div/div[2]",
                    order_element: 0,
                    valeur: "0",
                    code_datalib: "ODAD_SNOW_Synth_Ticket_08_QU",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 565,
                    name: "Délai dernière Interv",
                    xpath: "//*[@id=SYNTHESIS_NETWORK_CO]/div[2]/div[7]/div[4]/table/tbody/tr[2]/td/div/div/div[3]",
                    order_element: 0,
                    valeur: "Pas d'intervention",
                    code_datalib: "ODAD_SNOW_DELAI_DERNIER_INTERV_QU",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ]
                    }
                    ]
                    },
                    {
                    id: 924,
                    name: "Interventions Client",
                    xpath: "//*[@id=SYNTHESIS_NETWORK]/div[2]/div[7]",
                    order_element: 0,
                    valeur: null,
                    size_element: 0,
                    iid: "INTERVENTION_SAV_RACCO",
                    description: null,
                    indicateurs: [
                    {
                    id: 931,
                    name: "Installation:",
                    xpath: null,
                    order_element: 0,
                    valeur: "3",
                    code_datalib: "ODAD_FTTH_INTER_INST",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: {
                    id: 925,
                    name: "RDV",
                    xpath: "ODAD_FTTH_INSTALL_01",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_INSTALL_01",
                    value: null,
                    clicakble: false,
                    iid: null,
                    repeter: false,
                    indicateurSimples: [
                    {
                    id: 926,
                    name: "ID RDV:",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_INSTALL_02",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 927,
                    name: "Société",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_INSTALL_03",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 928,
                    name: "Résultat",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_INSTALL_04",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 929,
                    name: "Nbre de modification",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_INSTALL_05",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 930,
                    name: "Date dernière modif",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_INSTALL_06",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ]
                    },
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 936,
                    name: "SAV:",
                    xpath: null,
                    order_element: 0,
                    valeur: "0",
                    code_datalib: "ODAD_FTTH_INTER_SAV",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: {
                    id: 932,
                    name: "RDV",
                    xpath: "ODAD_FTTH_INSTALL_01",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_INSTALL_01",
                    value: null,
                    clicakble: false,
                    iid: null,
                    repeter: false,
                    indicateurSimples: [
                    {
                    id: 933,
                    name: "Société:",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_SAV_02",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 934,
                    name: "Résultat",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_SAV_03",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 935,
                    name: "Facturation",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_SAV_04",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ]
                    },
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 943,
                    name: "Qualité:",
                    xpath: null,
                    order_element: 0,
                    valeur: "0",
                    code_datalib: "ODAD_INTER_QUALITE_COUNT",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: {
                    id: 937,
                    name: "RDV",
                    xpath: "ODAD_QU_INTER_DATE",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_QU_INTER_DATE",
                    value: null,
                    clicakble: false,
                    iid: null,
                    repeter: false,
                    indicateurSimples: [
                    {
                    id: 938,
                    name: "ID RDV:",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_QU_02",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 939,
                    name: "Société",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_QU_03",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 940,
                    name: "Résultat",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_QU_04",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 941,
                    name: "Nbre de modification",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_QU_05",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    },
                    {
                    id: 942,
                    name: "Date dernière modif",
                    xpath: "null",
                    order_element: 0,
                    valeur: null,
                    code_datalib: "ODAD_FTTH_QU_06",
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ]
                    },
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateur_sets: [ ]
                    }
                    ],
                    indicateurs:null,
                    indicateurSets: [ ]
                    },
                    {
                    id: 566,
                    name: "DOMICILE",
                    xpath: "//*[@id=SYNTHESIS_HOME_CO']",
                    order_element: 0,
                    valeur: null,
                    sous_blocs: [ ],
                    indicateurs: [
                    {
                    id: 567,
                    name: "Adresse ligne",
                    xpath: "//*[@id='SYNTHESIS_HOME_CO']/div[2]/div",
                    order_element: 0,
                    valeur: "57 RUE DE LA ROCHEFOUCAULD 92100 BOULOGNE BILLANCOURT Batiment _NA_, Etage 2, Escalier C",
                    code_datalib: "ODAD_Info_09",
                    clients: [
                        {
                            id: 39,
                            technologielogie: "FTTH",
                            type_of_abonnement: "3P"
                            },
                            {
                            id: 40,
                            technologielogie: "ADSL",
                            type_of_abonnement: "3P"
                            },
                            {
                            id: 41,
                            technologielogie: "ADSL",
                            type_of_abonnement: "2P"
                            }
                    ],
                    selector_label: null,
                    selector_value: null,clients:[],
                    regle: null,
                    indicateur_a_afficher: null,
                    value_found: null,
                    class_style: null
                    }
                    ],
                    indicateurSets: [ ]
                    }
                    ]
                    },
                    
                    {
                        id: 568,
                        name: "PROVISIONING",
                        xpath: "file:///D:/Capgemini/synth%C3%A8se_commande/provisionning.html",
                        order_element: 0,
                        valeur: null,
                        blocs: [
                        {
                        id: 569,
                        name: "BBOX",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_1]",
                        order_element: 0,
                        valeur: null,
                        sous_blocs: [ ],
                        indicateurs: [ ],
                        indicateurSets: [
                        {
                        id: 570,
                        name: "BBOX",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_1]/div[2]/div[1]",
                        order_element: 0,
                        valeur: null,
                        code_datalib: "ODAD_IAD_CO",
                        value: null,
                        clicakble: false,
                        iid: "bc0f6622-dea2-11e5-a788-ac162d829508",
                        repeter: false,
                        indicateurSimples: [
                        {
                        id: 571,
                        name: "IMEI",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_1]/div[2]/div[1]/table/tbody/tr[2]/td/div/div/div[1]",
                        order_element: 0,
                        valeur: "124601807114851",
                        code_datalib: "ODAD_Cnx_ADSL_CO_07",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 572,
                        name: "Cohérence IMEI",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_1]/div[2]/div[1]/table/tbody/tr[2]/td/div/div/div[2]",
                        order_element: 0,
                        valeur: "KO",
                        code_datalib: "ODAD_Cnx_ADSL_CO_07_25",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 573,
                        name: "Statut",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_1]/div[2]/div[1]/table/tbody/tr[2]/td/div/div/div[3]",
                        order_element: 0,
                        valeur: "Expédition confirmée",
                        code_datalib: "ODAD_Info_IAD_CO_74",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        }
                        ]
                        },
                        {
                        id: 574,
                        name: "ONT",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_1]/div[2]/div[2]",
                        order_element: 0,
                        valeur: null,
                        code_datalib: "ODAD_ONT_CO",
                        value: null,
                        clicakble: false,
                        iid: "bc120741-dea2-11e5-a788-ac162d829508",
                        repeter: false,
                        indicateurSimples: [
                        {
                        id: 575,
                        name: "IMEI",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_1]/div[2]/div[2]/table/tbody/tr[2]/td/div/div/div[1]",
                        order_element: 0,
                        valeur: "181061746436172",
                        code_datalib: "ODAD_Info_ONT_CO_72",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 576,
                        name: "Cohérence IMEI",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_1]/div[2]/div[2]/table/tbody/tr[2]/td/div/div/div[2]",
                        order_element: 0,
                        valeur: "OK",
                        code_datalib: "ODAD_AMS_CO_12",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 577,
                        name: "Statut",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_1]/div[2]/div[2]/table/tbody/tr[2]/td/div/div/div[3]",
                        order_element: 0,
                        valeur: "Expédition confirmée",
                        code_datalib: "ODAD_Info_ONT_CO_74",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        }
                        ]
                        }
                        ]
                        },
                        {
                        id: 578,
                        name: "BBOX TV",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_2]",
                        order_element: 0,
                        valeur: null,
                        sous_blocs: [ ],
                        indicateurs: [ ],
                        indicateurSets: [
                        {
                        id: 579,
                        name: "BBOX TV",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_2]/div[2]/div",
                        order_element: 0,
                        valeur: null,
                        code_datalib: "ODAD_STB_CO",
                        value: null,
                        clicakble: false,
                        iid: "bc14a638-dea2-11e5-a788-ac162d829508",
                        repeter: false,
                        indicateurSimples: [
                        {
                        id: 580,
                        name: "IMEI",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_2]/div[2]/div[1]/table/tbody/tr[2]/td/div/div/div[1]",
                        order_element: 0,
                        valeur: "271011746403038",
                        code_datalib: "ODAD_STB_CO_14",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 581,
                        name: "Cohérence IMEI",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_2]/div[2]/div[1]/table/tbody/tr[2]/td/div/div/div[2]",
                        order_element: 0,
                        valeur: "OK",
                        code_datalib: "ODAD_STB_CO_18",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        },
                        {
                        id: 582,
                        name: "Statut",
                        xpath: "//*[@id=PROVISIONING_CO_MIG_2]/div[2]/div[1]/table/tbody/tr[2]/td/div/div/div[3]",
                        order_element: 0,
                        valeur: "Expédition confirmée",
                        code_datalib: "ODAD_Info_STB_CO_74",
                        selector_label: null,
                        selector_value: null,clients:[],
                        regle: null,
                        indicateur_a_afficher: null,
                        value_found: null,
                        class_style: null
                        }
                        ]
                        }
                        ]
                        }
                        ]
                        },
                                        {name:"EQUIPEMENT",id:"id23"},            
                                        {
                                            id: 583,
                                            name: "COMMANDE",
                                            xpath: "file:///D:/Capgemini/synth%C3%A8se_commande/commande.html",
                                            order_element: 0,
                                            valeur: null,
                                            blocs: [
                                            {
                                            id: 584,
                                            name: "DESCRIPTIF",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]",
                                            order_element: 0,
                                            valeur: null,
                                            sous_blocs: [
                                            {
                                            id: 594,
                                            name: "Caractéristiques Commande",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[10]",
                                            order_element: 0,
                                            valeur: null,
                                            size_element: 0,
                                            iid: "COMMANDE_EN_COURS_FTTH_CO_4",
                                            description: null,
                                            indicateurs: [
                                            {
                                            id: 595,
                                            name: "Date de commande",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[10]/div[2]",
                                            order_element: 0,
                                            valeur: "30 mai 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_DATE_ENREG_CMD",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 596,
                                            name: "Date d'ouverture commerciale",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[10]/div[3]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_FTTH_DATE_CCIALE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 597,
                                            name: "PTO obligatoire",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[10]/div[4]",
                                            order_element: 0,
                                            valeur: "Non",
                                            code_datalib: "ODAD_FTTH_PTO_OBLI",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 598,
                                            name: "PTO à saisir",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1/div[2]/div[10]/div[5]",
                                            order_element: 0,
                                            valeur: "Non",
                                            code_datalib: "ODAD_FTTH_SAISIE_PTO_CMD",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 599,
                                            name: "Création Prise PTO",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[10]/div[6]",
                                            order_element: 0,
                                            valeur: "Non",
                                            code_datalib: "ODAD_FTTH_PTO_CREATION",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 600,
                                            name: "Canal de demande",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[10]/div[7]",
                                            order_element: 0,
                                            valeur: "MAGENTO",
                                            code_datalib: "ODAD_DERNIERE_CMD_CANAL_DEMANDE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 601,
                                            name: "Livraison équipement",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[10]/div[8]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_LIVRAISON",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            }
                                            ],
                                            indicateur_sets: [ ]
                                            }
                                            ],
                                            indicateurs: [
                                            {
                                            id: 585,
                                            name: "Type de commande",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[1]",
                                            order_element: 0,
                                            valeur: "Acquisition",
                                            code_datalib: "ODAD_DERNIERE_CMD_TYPE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 586,
                                            name: "Statut commande",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[2]",
                                            order_element: 0,
                                            valeur: "Clos avec succès",
                                            code_datalib: "ODAD_DERNIERE_CMD_STATUT",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 587,
                                            name: "Type d'action",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[3]",
                                            order_element: 0,
                                            valeur: "Creation ligne",
                                            code_datalib: "ODAD_DERNIERE_CMD_TYPE_ACTION",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 588,
                                            name: "Statut action",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[4]",
                                            order_element: 0,
                                            valeur: "Terminee OK",
                                            code_datalib: "ODAD_DERNIERE_CMD_ETAT_ACTION",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 589,
                                            name: "technologie cible",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[5]",
                                            order_element: 0,
                                            valeur: "FTTH",
                                            code_datalib: "ODAD_DERNIERE_CMD_technologie_type_of_abonnement",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 590,
                                            name: "type_of_abonnement cible",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1/div[2]/div[6]",
                                            order_element: 0,
                                            valeur: "Bbox Must FTTH 3P 29,99E ENG 12M",
                                            code_datalib: "ODAD_DERNIERE_CMD_LIBELLE_type_of_abonnement",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 591,
                                            name: "Opérateur Immeuble",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[7]",
                                            order_element: 0,
                                            valeur: "FTEL",
                                            code_datalib: "ODAD_DERNIERE_CMD_FTTH_OP_IMMEUBLE_CIBLE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 592,
                                            name: "PTO",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[8]",
                                            order_element: 0,
                                            valeur: "FI-4716-6482",
                                            code_datalib: "ODAD_DERNIERE_CMD_PTO",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 593,
                                            name: "Adresse commande",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_1]/div[2]/div[9]",
                                            order_element: 0,
                                            valeur: "57 RUE DE LA ROCHEFOUCAULD 92100 BOULOGNE BILLANCOURT BATIMENT _NA_, ETAGE 2 ESCALIER C",
                                            code_datalib: "ODAD_DERNIERE_CMD_ADRESSE_RACCO",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            }
                                            ],
                                            indicateurSets: [ ]
                                            },
                                            {
                                            id: 602,
                                            name: "SUIVI",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2",
                                            order_element: 0,
                                            valeur: null,
                                            sous_blocs: [
                                            {
                                            id: 619,
                                            name: "Notification",
                                            xpath: "//*[@idCOMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[17]",
                                            order_element: 0,
                                            valeur: null,
                                            size_element: 0,
                                            iid: "COMMANDE_EN_COURS_FTTH_CO_NOTIF",
                                            description: null,
                                            indicateurs: [
                                            {
                                            id: 620,
                                            name: "Notif",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[17]/div[2]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_NOTIF_LIBELLE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 621,
                                            name: "Date notif",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[17]/div[3]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_NOTIF_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 622,
                                            name: "Commentaire notif",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[17]/div[4]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_NOTIF_COMMENTAIRE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            }
                                            ],
                                            indicateur_sets: [ ]
                                            }
                                            ],
                                            indicateurs: [
                                            {
                                            id: 603,
                                            name: "Souscription",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[1]",
                                            order_element: 0,
                                            valeur: "30 mai 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_SS_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 604,
                                            name: "EV Programmé",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[2]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_FTTH_DATE_EV_MIN",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 605,
                                            name: "EV",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[3]",
                                            order_element: 0,
                                            valeur: "3 juin 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_EV_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 606,
                                            name: "AR",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[4]",
                                            order_element: 0,
                                            valeur: "3 juin 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_AR_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 607,
                                            name: "FIBRE",
                                            xpath: "//*[@idCOMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[5]",
                                            order_element: 0,
                                            valeur: "4 juin 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_FIBRE_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 608,
                                            name: "PROV",
                                            xpath: "//*[@id=OMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[6]",
                                            order_element: 0,
                                            valeur: "5 juin 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_PROV_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 609,
                                            name: "INST",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[7]",
                                            order_element: 0,
                                            valeur: "4 juin 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_INST_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 610,
                                            name: "RDV",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[8]",
                                            order_element: 0,
                                            valeur: "18/08/2018 12:00-16:00",
                                            code_datalib: "ODAD_DERNIERE_CMD_DATE_RDV",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 611,
                                            name: "INSTALLOK",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[9]",
                                            order_element: 0,
                                            valeur: "16 août 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_INSTALLOK_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 612,
                                            name: "Commentaire",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[10]",
                                            order_element: 0,
                                            valeur: "internet : OK - telephone : OK - tv : OK",
                                            code_datalib: "ODAD_DERNIERE_CMD_INSTALLOK_COMMENTAIRE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 613,
                                            name: "DELAI",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[11]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_DELAI_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 614,
                                            name: "Type",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[12]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_DELAI_MOTIF",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 615,
                                            name: "INSTALL_REPROV",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[13]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_CR_INSTALL_REPROV_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 616,
                                            name: "PTO",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[14]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_PTO_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 617,
                                            name: "CR",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[15]",
                                            order_element: 0,
                                            valeur: "16 août 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_CR_DATE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 618,
                                            name: "Bascule commerciale",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_2]/div[2]/div[16]",
                                            order_element: 0,
                                            valeur: "16 août 2018",
                                            code_datalib: "ODAD_DERNIERE_CMD_DATE_FIN_CMD",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            }
                                            ],
                                            indicateurSets: [ ]
                                            },
                                            {
                                            id: 623,
                                            name: "STATUT",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_",
                                            order_element: 0,
                                            valeur: null,
                                            sous_blocs: [
                                            {
                                            id: 631,
                                            name: "Caractéristiques route optique",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[8]",
                                            order_element: 0,
                                            valeur: null,
                                            size_element: 0,
                                            iid: "COMMANDE_EN_COURS_FTTH_CO_5",
                                            description: null,
                                            indicateurs: [
                                            {
                                            id: 632,
                                            name: "Emplacement PM",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[8]/div[2]",
                                            order_element: 0,
                                            valeur: "Intérieur",
                                            code_datalib: "ODAD_TYPE_EMP_PM",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 633,
                                            name: "Emplacement PBO",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[8]/div[3]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_CAT_RACCO_LOGT",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 634,
                                            name: "Type PBO",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[8]/div[4]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_GRP_CAT_RACCO_LOGT",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 635,
                                            name: "Type de logement",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[8]/div[5]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_TYPE_LOGEMENT",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 636,
                                            name: "Accord gestionnaire",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[8]/div[6]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_ACCORD_GEST",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            }
                                            ],
                                            indicateur_sets: [ ]
                                            }
                                            ],
                                            indicateurs: [
                                            {
                                            id: 624,
                                            name: "Eligible renoncement",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[1]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_FLAG_ELIG_RENONCEMENT",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 625,
                                            name: "Date renoncement",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[2]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_DATE_RECONCEMENT_CMD",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 626,
                                            name: "FMS",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[3]",
                                            order_element: 0,
                                            valeur: "Oui",
                                            code_datalib: "ODAD_SOUSCRIPTION_FMS",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 627,
                                            name: "Montant",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[4]",
                                            order_element: 0,
                                            valeur: "29",
                                            code_datalib: "ODAD_SOUSCRIPTION_MONTANT_FMS_PAYES",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 628,
                                            name: "Mode d'encaissement",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[5]",
                                            order_element: 0,
                                            valeur: "Carte bancaire ponctuelle",
                                            code_datalib: "ODAD_SOUSCRIPTION_MODE_ENCAISSEMENT_FMS",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 629,
                                            name: "Respect promesse client",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[6]",
                                            order_element: 0,
                                            valeur: "Oui",
                                            code_datalib: "ODAD_DERNIERE_CMD_PROMESSE_CLIENT",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            },
                                            {
                                            id: 630,
                                            name: "Retard commande",
                                            xpath: "//*[@id=COMMANDE_EN_COURS_FTTH_CO_3]/div[2]/div[7]",
                                            order_element: 0,
                                            valeur: "-",
                                            code_datalib: "ODAD_DERNIERE_CMD_RETARD_COMMANDE",
                                            selector_label: null,
                                            selector_value: null,clients:[],
                                            regle: null,
                                            indicateur_a_afficher: null,
                                            value_found: null,
                                            class_style: null
                                            }
                                            ],
                                            indicateurSets: [ ]
                                            }
                                            ]
                                            },
                                                            {name:"RDV",id:"id25"},            
                {name:"type_of_abonnement ACTUELLE ",id:"id26"},
                {name:"HISTO type_of_abonnementS ",id:"id263"}

            ]
            },
        ];
    }
    $scope.onglets=loadOnglets();
    $scope.onglet_selected=$scope.onglets[0];
    $scope.sous_onglet_selected=$scope.onglet_selected.sous_onglets[0];

    $scope.switchToOngelt=function(onglet){
        $scope.onglets.forEach(element => {
            element.activer="";
        });
        $scope.onglet_selected=onglet;
        $scope.onglet_selected.activer="active";
        
        $scope.sous_onglet_selected=$scope.onglet_selected.sous_onglets.find(function(s){
                          return s.activer=="active";
                       });
    }   

    $scope.switchtoSousOngelts=function (sous_onglet) {
        $scope.onglet_selected.sous_onglets.forEach(element => {
            element.activer="";
        });
        $scope.sous_onglet_selected=sous_onglet;
        $scope.sous_onglet_selected.activer="active";
    }


    
});

