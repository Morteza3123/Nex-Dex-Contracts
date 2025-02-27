/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VRFCoordinatorV2Mock,
  VRFCoordinatorV2MockInterface,
} from "../VRFCoordinatorV2Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_baseFee",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "_gasPriceLink",
        type: "uint96",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSubscription",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "MustBeSubOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outputSeed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "payment",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "RandomWordsFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "preSeed",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "minimumRequestConfirmations",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RandomWordsRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SubscriptionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SubscriptionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "SubscriptionFunded",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_FEE",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAS_PRICE_LINK",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    name: "acceptSubscriptionOwnerTransfer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "addConsumer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "cancelSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createSubscription",
    outputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "fulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "uint96",
        name: "_amount",
        type: "uint96",
      },
    ],
    name: "fundSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRequestConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    name: "getSubscription",
    outputs: [
      {
        internalType: "uint96",
        name: "balance",
        type: "uint96",
      },
      {
        internalType: "uint64",
        name: "reqCount",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "consumers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "removeConsumer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "_minimumRequestConfirmations",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_numWords",
        type: "uint32",
      },
    ],
    name: "requestRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "requestSubscriptionOwnerTransfer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405260018055606460025534801561001957600080fd5b50604051610fdb380380610fdb8339810160408190526100389161006b565b6001600160601b039182166080521660a05261009e565b80516001600160601b038116811461006657600080fd5b919050565b6000806040838503121561007e57600080fd5b6100878361004f565b91506100956020840161004f565b90509250929050565b60805160a051610f0a6100d1600039600081816101b801526105db01526000818161011701526106260152610f0a6000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c8063823597401161008c578063a410347f11610066578063a410347f146101b3578063a47c7696146101da578063afc69b53146101fd578063d7ae1d301461021057600080fd5b806382359740146101855780639f87fad7146100fd578063a21a23e41461019357600080fd5b8062012291146100d357806304c357cb146100fd5780633d18651e146101125780635d3b1d30146101515780637341c10c146100fd578063808974ff14610172575b600080fd5b604080516000815260208101918290526100f491600391621e848091610ae7565b60405180910390f35b61011061010b366004610b79565b610223565b005b6101397f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160601b0390911681526020016100f4565b61016461015f366004610bc0565b610262565b6040519081526020016100f4565b610110610180366004610c27565b6103b7565b61011061010b366004610c4a565b61019b61076e565b6040516001600160401b0390911681526020016100f4565b6101397f000000000000000000000000000000000000000000000000000000000000000081565b6101ed6101e8366004610c4a565b610836565b6040516100f49493929190610c6c565b61011061020b366004610ce6565b6108ea565b61011061021e366004610b79565b6109e6565b60405162461bcd60e51b815260206004820152600f60248201526e1b9bdd081a5b5c1b195b595b9d1959608a1b60448201526064015b60405180910390fd5b6001600160401b0384166000908152600360205260408120546001600160a01b03166102a157604051630fb532db60e11b815260040160405180910390fd5b60018054600091826102b283610d55565b909155506002805491925060009190826102cb83610d55565b9091555060408051606080820183526001600160401b038b811680845263ffffffff8b811660208087018281528d8416888a0181815260008e8152600485528b902099518a54935191518716600160601b0263ffffffff60601b1992909716600160401b026bffffffffffffffffffffffff19909416981697909717919091179590951692909217909555855189815290810187905261ffff8d16818701529283019390935260808201529151929350339290918b917f63373d1c4696214b898952999c9aaec57dac1ee2723cec59bea6888f489a97729160a0908290030190a4509695505050505050565b60005a6000848152600460205260408120549192506001600160401b03909116900361041b5760405162461bcd60e51b81526020600482015260136024820152721b9bdb995e1a5cdd195b9d081c995c5d595cdd606a1b6044820152606401610259565b6000838152600460209081526040808320815160608101835290546001600160401b03808216835263ffffffff600160401b8304811695840195909552600160601b909104909316918101829052929181111561047a5761047a610d29565b6040519080825280602002602001820160405280156104a3578160200160208202803683370190505b50905060005b826040015163ffffffff168110156105175760408051602081018890529081018290526060016040516020818303038152906040528051906020012060001c8282815181106104fa576104fa610d6e565b60209081029190910101528061050f81610d55565b9150506104a9565b50600080631fe543e360e01b8784604051602401610536929190610d84565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506000866001600160a01b0316856020015163ffffffff16836040516105909190610dd2565b60006040518083038160008787f1925050503d80600081146105ce576040519150601f19603f3d011682016040523d82523d6000602084013e6105d3565b606091505b5050905060007f00000000000000000000000000000000000000000000000000000000000000006001600160601b03165a61060e9089610e0d565b6106189190610e24565b61064b906001600160601b037f000000000000000000000000000000000000000000000000000000000000000016610e43565b86516001600160401b03166000908152600360205260409020549091506001600160601b03808316600160a01b90920416101561069b57604051631e9acf1760e31b815260040160405180910390fd5b85516001600160401b0316600090815260036020526040902080548291906014906106d7908490600160a01b90046001600160601b0316610e5b565b82546101009290920a6001600160601b0381810219909316918316021790915560008b81526004602090815260409182902080546fffffffffffffffffffffffffffffffff1916905581518d815292851690830152841515908201528a91507f7dffc5ae5ee4e2e4df1651cf6ad329a73cebdb728f37ea0187b9b17e036756e49060600160405180910390a2505050505050505050565b600080546001600160401b0316818061078683610e83565b82546001600160401b039182166101009390930a928302928202191691909117909155604080518082018252338082526000602080840182815282548716835260038252858320945190516001600160601b0316600160a01b026001600160a01b03909116179093555492519081529190921692507f464722b4166576d3dcbba877b999bc35cf911f4eaf434b7eba68fa113951d0bf910160405180910390a2506000546001600160401b031690565b6001600160401b038116600090815260036020526040812054819081906060906001600160a01b031661087c57604051630fb532db60e11b815260040160405180910390fd5b6001600160401b0385166000908152600360205260408120546001600160601b03600160a01b82041691906001600160a01b0316816040519080825280602002602001820160405280156108da578160200160208202803683370190505b5093509350935093509193509193565b6001600160401b0382166000908152600360205260409020546001600160a01b031661092957604051630fb532db60e11b815260040160405180910390fd5b6001600160401b03821660009081526003602052604090208054600160a01b90046001600160601b031690829060146109628385610ea9565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550826001600160401b03167fd39ec07f4e209f627a4c427971473820dc129761ba28de8906bd56f57101d4f88284846109be9190610ea9565b604080516001600160601b0393841681529290911660208301520160405180910390a2505050565b6001600160401b03821660009081526003602052604090205482906001600160a01b031680610a2857604051630fb532db60e11b815260040160405180910390fd5b336001600160a01b03821614610a5c57604051636c51fda960e11b81526001600160a01b0382166004820152602401610259565b6001600160401b0384166000818152600360209081526040918290205482516001600160a01b0388168152600160a01b9091046001600160601b0316918101919091527fe8ed5b475a5b5987aa9165e8731bb78043f39eee32ec5a1169a89e27fcd49815910160405180910390a25050506001600160401b0316600090815260036020526040812055565b60006060820161ffff86168352602063ffffffff86168185015260606040850152818551808452608086019150828701935060005b81811015610b3857845183529383019391830191600101610b1c565b509098975050505050505050565b80356001600160401b0381168114610b5d57600080fd5b919050565b80356001600160a01b0381168114610b5d57600080fd5b60008060408385031215610b8c57600080fd5b610b9583610b46565b9150610ba360208401610b62565b90509250929050565b803563ffffffff81168114610b5d57600080fd5b600080600080600060a08688031215610bd857600080fd5b85359450610be860208701610b46565b9350604086013561ffff81168114610bff57600080fd5b9250610c0d60608701610bac565b9150610c1b60808701610bac565b90509295509295909350565b60008060408385031215610c3a57600080fd5b82359150610ba360208401610b62565b600060208284031215610c5c57600080fd5b610c6582610b46565b9392505050565b6000608082016001600160601b038716835260206001600160401b0387168185015260018060a01b0380871660408601526080606086015282865180855260a087019150838801945060005b81811015610cd6578551841683529484019491840191600101610cb8565b50909a9950505050505050505050565b60008060408385031215610cf957600080fd5b610d0283610b46565b915060208301356001600160601b0381168114610d1e57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610d6757610d67610d3f565b5060010190565b634e487b7160e01b600052603260045260246000fd5b6000604082018483526020604081850152818551808452606086019150828701935060005b81811015610dc557845183529383019391830191600101610da9565b5090979650505050505050565b6000825160005b81811015610df35760208186018101518583015201610dd9565b81811115610e02576000828501525b509190910192915050565b600082821015610e1f57610e1f610d3f565b500390565b6000816000190483118215151615610e3e57610e3e610d3f565b500290565b60008219821115610e5657610e56610d3f565b500190565b60006001600160601b0383811690831681811015610e7b57610e7b610d3f565b039392505050565b60006001600160401b03808316818103610e9f57610e9f610d3f565b6001019392505050565b60006001600160601b03808316818516808303821115610ecb57610ecb610d3f565b0194935050505056fea2646970667358221220b95eae122c8d3178a78f78b41cf0066be1f7d2fbf733712b47b7d36b73f274e564736f6c634300080d0033";

type VRFCoordinatorV2MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFCoordinatorV2MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFCoordinatorV2Mock__factory extends ContractFactory {
  constructor(...args: VRFCoordinatorV2MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "VRFCoordinatorV2Mock";
  }

  deploy(
    _baseFee: BigNumberish,
    _gasPriceLink: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VRFCoordinatorV2Mock> {
    return super.deploy(
      _baseFee,
      _gasPriceLink,
      overrides || {}
    ) as Promise<VRFCoordinatorV2Mock>;
  }
  getDeployTransaction(
    _baseFee: BigNumberish,
    _gasPriceLink: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_baseFee, _gasPriceLink, overrides || {});
  }
  attach(address: string): VRFCoordinatorV2Mock {
    return super.attach(address) as VRFCoordinatorV2Mock;
  }
  connect(signer: Signer): VRFCoordinatorV2Mock__factory {
    return super.connect(signer) as VRFCoordinatorV2Mock__factory;
  }
  static readonly contractName: "VRFCoordinatorV2Mock";
  public readonly contractName: "VRFCoordinatorV2Mock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFCoordinatorV2MockInterface {
    return new utils.Interface(_abi) as VRFCoordinatorV2MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFCoordinatorV2Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VRFCoordinatorV2Mock;
  }
}
