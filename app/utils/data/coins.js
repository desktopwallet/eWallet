
export const CoinsJson =
  {
    "bitcoin": [
      {
        "address_type": 0,
        "address_type_p2sh": 5,
        "bech32_prefix": "bc",
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://btc1.trezor.io",
          "https://btc2.trezor.io",
          "https://btc3.trezor.io",
          "https://btc4.trezor.io",
          "https://btc5.trezor.io"
        ],
        "blocktime_seconds": 600,
        "cashaddr_prefix": null,
        "coin_label": "Bitcoin",
        "coin_name": "Bitcoin",
        "coin_shortcut": "BTC",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Economy": 70,
          "High": 200,
          "Low": 10,
          "Normal": 140
        },
        "dust_limit": 546,
        "force_bip143": false,
        "fork_id": null,
        "hash_genesis_block": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
        "max_address_length": 34,
        "maxfee_kb": 2000000,
        "min_address_length": 27,
        "minfee_kb": 1000,
        "name": "Bitcoin",
        "segwit": true,
        "shortcut": "BTC",
        "signed_message_header": "Bitcoin Signed Message:\n",
        "slip44": 0,
        "support": {
          "connect": true,
          "trezor1": "1.5.2",
          "trezor2": "2.0.5",
          "webwallet": true
        },
        "xprv_magic": 76066276,
        "xpub_magic": 76067358,
        "xpub_magic_segwit_native": 78792518,
        "xpub_magic_segwit_p2sh": 77429938
      },
      {
        "address_type": 111,
        "address_type_p2sh": 196,
        "bech32_prefix": "tb",
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://tbtc1.trezor.io",
          "https://tbtc2.trezor.io"
        ],
        "blocktime_seconds": 600,
        "cashaddr_prefix": null,
        "coin_label": "Testnet",
        "coin_name": "Testnet",
        "coin_shortcut": "TEST",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Normal": 10
        },
        "dust_limit": 546,
        "force_bip143": false,
        "fork_id": null,
        "hash_genesis_block": "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
        "max_address_length": 34,
        "maxfee_kb": 10000000,
        "min_address_length": 27,
        "minfee_kb": 1000,
        "name": "Testnet",
        "segwit": true,
        "shortcut": "TEST",
        "signed_message_header": "Bitcoin Signed Message:\n",
        "slip44": 1,
        "support": {
          "connect": true,
          "trezor1": "1.5.2",
          "trezor2": "2.0.5",
          "webwallet": true
        },
        "xprv_magic": 70615956,
        "xpub_magic": 70617039,
        "xpub_magic_segwit_native": 73342198,
        "xpub_magic_segwit_p2sh": 71979618
      },
      {
        "address_type": 0,
        "address_type_p2sh": 5,
        "bech32_prefix": null,
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://bch1.trezor.io",
          "https://bch2.trezor.io",
          "https://bch3.trezor.io",
          "https://bch4.trezor.io",
          "https://bch5.trezor.io"
        ],
        "blocktime_seconds": 600,
        "cashaddr_prefix": "bitcoincash",
        "coin_label": "Bitcoin Cash",
        "coin_name": "Bcash",
        "coin_shortcut": "BCH",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Economy": 70,
          "High": 200,
          "Low": 10,
          "Normal": 140
        },
        "dust_limit": 546,
        "force_bip143": true,
        "fork_id": 0,
        "hash_genesis_block": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
        "max_address_length": 34,
        "maxfee_kb": 500000,
        "min_address_length": 27,
        "minfee_kb": 1000,
        "name": "Bitcoin Cash",
        "segwit": false,
        "shortcut": "BCH",
        "signed_message_header": "Bitcoin Signed Message:\n",
        "slip44": 145,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": true
        },
        "xprv_magic": 76066276,
        "xpub_magic": 76067358,
        "xpub_magic_segwit_native": null,
        "xpub_magic_segwit_p2sh": null
      },
      {
        "address_type": 38,
        "address_type_p2sh": 23,
        "bech32_prefix": "btg",
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://btg1.trezor.io",
          "https://btg2.trezor.io",
          "https://btg3.trezor.io",
          "https://btg4.trezor.io",
          "https://btg5.trezor.io"
        ],
        "blocktime_seconds": 600,
        "cashaddr_prefix": null,
        "coin_label": "Bitcoin Gold",
        "coin_name": "Bgold",
        "coin_shortcut": "BTG",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Economy": 70,
          "High": 200,
          "Low": 10,
          "Normal": 140
        },
        "dust_limit": 546,
        "force_bip143": true,
        "fork_id": 79,
        "hash_genesis_block": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
        "max_address_length": 34,
        "maxfee_kb": 500000,
        "min_address_length": 27,
        "minfee_kb": 1000,
        "name": "Bitcoin Gold",
        "segwit": true,
        "shortcut": "BTG",
        "signed_message_header": "Bitcoin Gold Signed Message:\n",
        "slip44": 156,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": true
        },
        "xprv_magic": 76066276,
        "xpub_magic": 76067358,
        "xpub_magic_segwit_native": null,
        "xpub_magic_segwit_p2sh": 77429938
      },
      {
        "address_type": 76,
        "address_type_p2sh": 16,
        "bech32_prefix": null,
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://dash1.trezor.io",
          "https://dash2.trezor.io",
          "https://dash3.trezor.io",
          "https://dash4.trezor.io",
          "https://dash5.trezor.io"
        ],
        "blocktime_seconds": 150,
        "cashaddr_prefix": null,
        "coin_label": "Dash",
        "coin_name": "Dash",
        "coin_shortcut": "DASH",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Normal": 10
        },
        "dust_limit": 5460,
        "force_bip143": false,
        "fork_id": null,
        "hash_genesis_block": "00000ffd590b1485b3caadc19b22e6379c733355108f107a430458cdf3407ab6",
        "max_address_length": 34,
        "maxfee_kb": 100000,
        "min_address_length": 27,
        "minfee_kb": 1000,
        "name": "Dash",
        "segwit": false,
        "shortcut": "DASH",
        "signed_message_header": "DarkCoin Signed Message:\n",
        "slip44": 5,
        "support": {
          "connect": true,
          "trezor1": "1.5.2",
          "trezor2": "2.0.5",
          "webwallet": true
        },
        "xprv_magic": 50221816,
        "xpub_magic": 50221772,
        "xpub_magic_segwit_native": null,
        "xpub_magic_segwit_p2sh": null
      },
      {
        "address_type": 30,
        "address_type_p2sh": 22,
        "bech32_prefix": null,
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://doge1.trezor.io",
          "https://doge2.trezor.io",
          "https://doge3.trezor.io",
          "https://doge4.trezor.io",
          "https://doge5.trezor.io"
        ],
        "blocktime_seconds": 60,
        "cashaddr_prefix": null,
        "coin_label": "Dogecoin",
        "coin_name": "Dogecoin",
        "coin_shortcut": "DOGE",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Normal": 100000
        },
        "dust_limit": 10000000,
        "force_bip143": false,
        "fork_id": null,
        "hash_genesis_block": "1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691",
        "max_address_length": 34,
        "maxfee_kb": 1000000000,
        "min_address_length": 27,
        "minfee_kb": 1000,
        "name": "Dogecoin",
        "segwit": false,
        "shortcut": "DOGE",
        "signed_message_header": "Dogecoin Signed Message:\n",
        "slip44": 3,
        "support": {
          "connect": true,
          "trezor1": "1.5.2",
          "trezor2": "2.0.5",
          "webwallet": true
        },
        "xprv_magic": 49988504,
        "xpub_magic": 49990397,
        "xpub_magic_segwit_native": null,
        "xpub_magic_segwit_p2sh": null
      },
      {
        "address_type": 48,
        "address_type_p2sh": 50,
        "bech32_prefix": "ltc",
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://ltc1.trezor.io",
          "https://ltc2.trezor.io",
          "https://ltc3.trezor.io",
          "https://ltc4.trezor.io",
          "https://ltc5.trezor.io"
        ],
        "blocktime_seconds": 150,
        "cashaddr_prefix": null,
        "coin_label": "Litecoin",
        "coin_name": "Litecoin",
        "coin_shortcut": "LTC",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Normal": 1000
        },
        "dust_limit": 546,
        "force_bip143": false,
        "fork_id": null,
        "hash_genesis_block": "12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2",
        "max_address_length": 34,
        "maxfee_kb": 40000000,
        "min_address_length": 27,
        "minfee_kb": 100000,
        "name": "Litecoin",
        "segwit": true,
        "shortcut": "LTC",
        "signed_message_header": "Litecoin Signed Message:\n",
        "slip44": 2,
        "support": {
          "connect": true,
          "trezor1": "1.5.2",
          "trezor2": "2.0.5",
          "webwallet": true
        },
        "xprv_magic": 27106558,
        "xpub_magic": 27108450,
        "xpub_magic_segwit_native": null,
        "xpub_magic_segwit_p2sh": 28471030
      },
      {
        "address_type": 52,
        "address_type_p2sh": 5,
        "bech32_prefix": null,
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://nmc1.trezor.io",
          "https://nmc2.trezor.io"
        ],
        "blocktime_seconds": 600,
        "cashaddr_prefix": null,
        "coin_label": "Namecoin",
        "coin_name": "Namecoin",
        "coin_shortcut": "NMC",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Normal": 10
        },
        "dust_limit": 2940,
        "force_bip143": false,
        "fork_id": null,
        "hash_genesis_block": "000000000062b72c5e2ceb45fbc8587e807c155b0da735e6483dfba2f0a9c770",
        "max_address_length": 34,
        "maxfee_kb": 10000000,
        "min_address_length": 27,
        "minfee_kb": 1000,
        "name": "Namecoin",
        "segwit": false,
        "shortcut": "NMC",
        "signed_message_header": "Namecoin Signed Message:\n",
        "slip44": 7,
        "support": {
          "connect": true,
          "trezor1": "1.5.2",
          "trezor2": "2.0.5",
          "webwallet": true
        },
        "xprv_magic": 76066276,
        "xpub_magic": 76067358,
        "xpub_magic_segwit_native": null,
        "xpub_magic_segwit_p2sh": null
      },
      {
        "address_type": 71,
        "address_type_p2sh": 5,
        "bech32_prefix": "vtc",
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://vtc1.trezor.io",
          "https://vtc2.trezor.io",
          "https://vtc3.trezor.io",
          "https://vtc4.trezor.io",
          "https://vtc5.trezor.io"
        ],
        "blocktime_seconds": 150,
        "cashaddr_prefix": null,
        "coin_label": "Vertcoin",
        "coin_name": "Vertcoin",
        "coin_shortcut": "VTC",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Normal": 1000
        },
        "dust_limit": 54600,
        "force_bip143": false,
        "fork_id": null,
        "hash_genesis_block": "4d96a915f49d40b1e5c2844d1ee2dccb90013a990ccea12c492d22110489f0c4",
        "max_address_length": 34,
        "maxfee_kb": 40000000,
        "min_address_length": 27,
        "minfee_kb": 100000,
        "name": "Vertcoin",
        "segwit": true,
        "shortcut": "VTC",
        "signed_message_header": "Vertcoin Signed Message:\n",
        "slip44": 28,
        "support": {
          "connect": true,
          "trezor1": "1.6.1",
          "trezor2": "2.0.5",
          "webwallet": true
        },
        "xprv_magic": 76066276,
        "xpub_magic": 76067358,
        "xpub_magic_segwit_native": null,
        "xpub_magic_segwit_p2sh": 77429938
      },
      {
        "address_type": 7352,
        "address_type_p2sh": 7357,
        "bech32_prefix": null,
        "bip115": false,
        "bitcore": [],
        "blockbook": [
          "https://zec1.trezor.io",
          "https://zec2.trezor.io",
          "https://zec3.trezor.io",
          "https://zec4.trezor.io",
          "https://zec5.trezor.io"
        ],
        "blocktime_seconds": 150,
        "cashaddr_prefix": null,
        "coin_label": "Zcash",
        "coin_name": "Zcash",
        "coin_shortcut": "ZEC",
        "curve_name": "secp256k1",
        "decred": false,
        "default_fee_b": {
          "Normal": 10
        },
        "dust_limit": 546,
        "force_bip143": false,
        "fork_id": null,
        "hash_genesis_block": "00040fe8ec8471911baa1db1266ea15dd06b4a8a5c453883c000b031973dce08",
        "max_address_length": 95,
        "maxfee_kb": 1000000,
        "min_address_length": 35,
        "minfee_kb": 1000,
        "name": "Zcash",
        "segwit": false,
        "shortcut": "ZEC",
        "signed_message_header": "Zcash Signed Message:\n",
        "slip44": 133,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": true
        },
        "xprv_magic": 76066276,
        "xpub_magic": 76067358,
        "xpub_magic_segwit_native": null,
        "xpub_magic_segwit_p2sh": null
      }
    ],
    "erc20": [],
    "eth": [
      {
        "blockbook": [
          "https://eth1.trezor.io",
          "https://eth2.trezor.io"
        ],
        "chain": "eth",
        "chain_id": 1,
        "name": "Ethereum",
        "rskip60": false,
        "shortcut": "ETH",
        "slip44": 60,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": true
        },
        "url": "https://www.ethereum.org"
      },
      {
        "blockbook": [],
        "chain": "exp",
        "chain_id": 2,
        "name": "Expanse",
        "rskip60": false,
        "shortcut": "EXP",
        "slip44": 40,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://expanse.tech"
      },
      {
        "blockbook": [
          "https://ropsten1.trezor.io"
        ],
        "chain": "rop",
        "chain_id": 3,
        "name": "Ethereum Testnet Ropsten",
        "rskip60": false,
        "shortcut": "tROP",
        "slip44": 1,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://www.ethereum.org"
      },
      {
        "blockbook": [],
        "chain": "rin",
        "chain_id": 4,
        "name": "Ethereum Testnet Rinkeby",
        "rskip60": false,
        "shortcut": "tRIN",
        "slip44": 1,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://www.ethereum.org"
      },
      {
        "blockbook": [],
        "chain": "ubq",
        "chain_id": 8,
        "name": "Ubiq",
        "rskip60": false,
        "shortcut": "UBQ",
        "slip44": 108,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://ubiqsmart.com"
      },
      {
        "blockbook": [],
        "chain": "etsc",
        "chain_id": 28,
        "name": "Ethereum Social",
        "rskip60": false,
        "shortcut": "ETSC",
        "slip44": 1128,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://ethereumsocial.kr"
      },
      {
        "blockbook": [],
        "chain": "rsk",
        "chain_id": 30,
        "name": "RSK",
        "rskip60": true,
        "shortcut": "RSK",
        "slip44": 137,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://www.rsk.co"
      },
      {
        "blockbook": [],
        "chain": "trsk",
        "chain_id": 31,
        "name": "RSK Testnet",
        "rskip60": true,
        "shortcut": "tRSK",
        "slip44": 37310,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://www.rsk.co"
      },
      {
        "blockbook": [],
        "chain": "kov",
        "chain_id": 42,
        "name": "Ethereum Testnet Kovan",
        "rskip60": false,
        "shortcut": "tKOV",
        "slip44": 1,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://www.ethereum.org"
      },
      {
        "blockbook": [],
        "chain": "go",
        "chain_id": 60,
        "name": "GoChain",
        "rskip60": false,
        "shortcut": "GO",
        "slip44": 6060,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://gochain.io"
      },
      {
        "blockbook": [
          "https://etc1.trezor.io",
          "https://etc2.trezor.io"
        ],
        "chain": "etc",
        "chain_id": 61,
        "name": "Ethereum Classic",
        "rskip60": false,
        "shortcut": "ETC",
        "slip44": 61,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": true
        },
        "url": "https://ethereumclassic.github.io"
      },
      {
        "blockbook": [],
        "chain": "tetc",
        "chain_id": 62,
        "name": "Ethereum Classic Testnet",
        "rskip60": false,
        "shortcut": "tETC",
        "slip44": 1,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://ethereumclassic.github.io"
      },
      {
        "blockbook": [],
        "chain": "ella",
        "chain_id": 64,
        "name": "Ellaism",
        "rskip60": false,
        "shortcut": "ELLA",
        "slip44": 163,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://ellaism.org"
      },
      {
        "blockbook": [],
        "chain": "mix",
        "chain_id": 76,
        "name": "Mix",
        "rskip60": false,
        "shortcut": "MIX",
        "slip44": 76,
        "support": {
          "connect": true,
          "trezor1": "1.7.2",
          "trezor2": "2.0.10",
          "webwallet": false
        },
        "url": "https://www.mix-blockchain.org"
      },
      {
        "blockbook": [],
        "chain": "clo",
        "chain_id": 820,
        "name": "Callisto",
        "rskip60": false,
        "shortcut": "CLO",
        "slip44": 820,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://callisto.network"
      },
      {
        "blockbook": [],
        "chain": "ath",
        "chain_id": 1620,
        "name": "Atheios",
        "rskip60": false,
        "shortcut": "ATH",
        "slip44": 1620,
        "support": {
          "connect": true,
          "trezor1": "1.6.3",
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "url": "https://atheios.com"
      },
      {
        "blockbook": [],
        "chain": "egem",
        "chain_id": 1987,
        "name": "EtherGem",
        "rskip60": false,
        "shortcut": "EGEM",
        "slip44": 1987,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://egem.io"
      },
      {
        "blockbook": [],
        "chain": "eosc",
        "chain_id": 2018,
        "name": "EOS Classic",
        "rskip60": false,
        "shortcut": "EOSC",
        "slip44": 2018,
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "url": "https://eos-classic.io"
      },
      {
        "blockbook": [],
        "chain": "esn",
        "chain_id": 31102,
        "name": "Ethersocial Network",
        "rskip60": false,
        "shortcut": "ESN",
        "slip44": 31102,
        "support": {
          "connect": true,
          "trezor1": "1.6.3",
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "url": "https://ethersocial.org"
      },
      {
        "blockbook": [],
        "chain": "akroma",
        "chain_id": 200625,
        "name": "Akroma",
        "rskip60": false,
        "shortcut": "AKA",
        "slip44": 200625,
        "support": {
          "connect": true,
          "trezor1": "1.6.3",
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "url": "https://akroma.io"
      },
      {
        "blockbook": [],
        "chain": "etho",
        "chain_id": 1313114,
        "name": "Ether-1",
        "rskip60": false,
        "shortcut": "ETHO",
        "slip44": 1313114,
        "support": {
          "connect": true,
          "trezor1": "1.6.3",
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "url": "https://ether1.org"
      },
      {
        "blockbook": [],
        "chain": "music",
        "chain_id": 7762959,
        "name": "Musicoin",
        "rskip60": false,
        "shortcut": "MUSIC",
        "slip44": 184,
        "support": {
          "connect": true,
          "trezor1": "1.6.3",
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "url": "https://musicoin.org"
      },
      {
        "blockbook": [],
        "chain": "pirl",
        "chain_id": 3125659152,
        "name": "Pirl",
        "rskip60": false,
        "shortcut": "PIRL",
        "slip44": 164,
        "support": {
          "connect": true,
          "trezor1": "1.6.3",
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "url": "https://pirl.io"
      }
    ],
    "misc": [
      {
        "curve": "ed25519",
        "name": "Cardano",
        "shortcut": "ADA",
        "slip44": 1815,
        "support": {
          "connect": true,
          "trezor1": false,
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "wallet": {
          "AdaLite": "https://adalite.io/app"
        }
      },
      {
        "curve": "ed25519",
        "name": "Lisk",
        "shortcut": "LSK",
        "slip44": 134,
        "support": {
          "connect": true,
          "trezor1": "1.7.1",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "wallet": {}
      },
      {
        "curve": "ed25519",
        "name": "Stellar",
        "shortcut": "XLM",
        "slip44": 148,
        "support": {
          "connect": true,
          "trezor1": "1.7.1",
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "wallet": {
          "Account Viewer": "https://trezor.io/stellar/"
        }
      },
      {
        "curve": "secp256k1",
        "name": "Ripple",
        "shortcut": "XRP",
        "slip44": 144,
        "support": {
          "connect": true,
          "trezor1": false,
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "wallet": {}
      },
      {
        "curve": "ed25519",
        "name": "Tezos",
        "shortcut": "XTZ",
        "slip44": 1729,
        "support": {
          "connect": true,
          "trezor1": false,
          "trezor2": "2.0.8",
          "webwallet": false
        },
        "wallet": {
          "SimpleStaking": "https://simplestaking.com"
        }
      }
    ],
    "nem": [
      {
        "divisibility": 6,
        "mosaic": "xem",
        "name": "NEM",
        "namespace": "nem",
        "shortcut": "XEM",
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "ticker": "XEM"
      },
      {
        "divisibility": 6,
        "fee": 10,
        "levy": "MosaicLevy_Percentile",
        "levy_mosaic": "coin",
        "levy_namespace": "dim",
        "mosaic": "coin",
        "name": "DIMCOIN",
        "namespace": "dim",
        "networks": [
          104
        ],
        "shortcut": "DIM",
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "ticker": "DIM"
      },
      {
        "divisibility": 6,
        "mosaic": "token",
        "name": "DIM TOKEN",
        "namespace": "dim",
        "networks": [
          104
        ],
        "shortcut": "DIMTOK",
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "ticker": "DIMTOK"
      },
      {
        "divisibility": 0,
        "mosaic": "breeze-token",
        "name": "Breeze Token",
        "namespace": "breeze",
        "networks": [
          104
        ],
        "shortcut": "BREEZE",
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "ticker": "BREEZE"
      },
      {
        "divisibility": 0,
        "mosaic": "heart",
        "name": "PacNEM Game Credits",
        "namespace": "pacnem",
        "networks": [
          104
        ],
        "shortcut": "PAC:HRT",
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "ticker": "PAC:HRT"
      },
      {
        "divisibility": 6,
        "fee": 100,
        "levy": "MosaicLevy_Percentile",
        "levy_mosaic": "xem",
        "levy_namespace": "nem",
        "mosaic": "cheese",
        "name": "PacNEM Score Tokens",
        "namespace": "pacnem",
        "networks": [
          104
        ],
        "shortcut": "PAC:CHS",
        "support": {
          "connect": true,
          "trezor1": "1.6.2",
          "trezor2": "2.0.7",
          "webwallet": false
        },
        "ticker": "PAC:CHS"
      }
    ]
  };
