/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { APIConsumer, APIConsumerInterface } from "../APIConsumer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_jobId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_link",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
    ],
    name: "DataFullfilled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_volume",
        type: "uint256",
      },
    ],
    name: "fulfill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestVolumeData",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "volume",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405260016004553480156200001657600080fd5b5060405162001af638038062001af683398181016040528101906200003c9190620002a3565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000875762000081620000e760201b60201c565b62000099565b62000098816200017f60201b60201c565b5b8373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508260a081815250508160c081815250505050505062000347565b6200017d73c89bd4e1632d3a43cb03aaad5262cbe4038bc57173ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200014b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000171919062000315565b6200017f60201b60201c565b565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001f582620001c8565b9050919050565b6200020781620001e8565b81146200021357600080fd5b50565b6000815190506200022781620001fc565b92915050565b6000819050919050565b62000242816200022d565b81146200024e57600080fd5b50565b600081519050620002628162000237565b92915050565b6000819050919050565b6200027d8162000268565b81146200028957600080fd5b50565b6000815190506200029d8162000272565b92915050565b60008060008060808587031215620002c057620002bf620001c3565b5b6000620002d08782880162000216565b9450506020620002e38782880162000251565b9350506040620002f6878288016200028c565b9250506060620003098782880162000216565b91505092959194509250565b6000602082840312156200032e576200032d620001c3565b5b60006200033e8482850162000216565b91505092915050565b60805160a05160c05161177f6200037760003960006103930152600061020501526000610371015261177f6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634357855e146100515780636021abac1461006d5780638dc654a21461008b578063c618a1e414610095575b600080fd5b61006b60048036038101906100669190610e86565b6100b3565b005b6100756101fd565b6040516100829190610ed5565b60405180910390f35b6100936103be565b005b61009d6103c0565b6040516100aa9190610eff565b60405180910390f35b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610155576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014c90610f9d565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a2816006819055507f221d507243adddffe789060be0e69bff4be830996c6b265bfda5083d86f886326006546040516101f09190610eff565b60405180910390a1505050565b6000806102327f000000000000000000000000000000000000000000000000000000000000000030634357855e60e01b6103c6565b90506102966040518060400160405280600381526020017f676574000000000000000000000000000000000000000000000000000000000081525060405180608001604052806049815260200161170160499139836103f79092919063ffffffff16565b6103156040518060400160405280600481526020017f70617468000000000000000000000000000000000000000000000000000000008152506040518060400160405280601881526020017f5241572c4554482c5553442c564f4c554d453234484f55520000000000000000815250836103f79092919063ffffffff16565b6000670de0b6b3a7640000905061036c6040518060400160405280600581526020017f74696d6573000000000000000000000000000000000000000000000000000000815250828461042a9092919063ffffffff16565b6103b77f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000061045d565b9250505090565b565b60065481565b6103ce610d8e565b6103d6610d8e565b6103ed85858584610529909392919063ffffffff16565b9150509392505050565b61040e8284608001516105d990919063ffffffff16565b6104258184608001516105d990919063ffffffff16565b505050565b6104418284608001516105d990919063ffffffff16565b6104588184608001516105fe90919063ffffffff16565b505050565b60008060045490506001816104729190610fec565b6004819055506000634042994660e01b60008087600001513089604001518760018c60800151600001516040516024016104b3989796959493929190611157565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905061051e868386846106ab565b925050509392505050565b610531610d8e565b6105418560800151610100610840565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b6105e682600383516108aa565b6105f98183610a2f90919063ffffffff16565b505050565b7fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000811215610635576106308282610a51565b6106a7565b67ffffffffffffffff8113156106545761064f8282610ac8565b6106a6565b6000811261066d57610668826000836108aa565b6106a5565b6106a4826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61069f91906111e6565b6108aa565b5b5b5b5050565b600030846040516020016106c0929190611333565b604051602081830303815290604052805190602001209050846005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08685856040518463ffffffff1660e01b81526004016107b69392919061135f565b6020604051808303816000875af11580156107d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f991906113d5565b610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082f90611474565b60405180910390fd5b949350505050565b610848610dfb565b600060208361085791906114c3565b146108835760208261086991906114c3565b602061087591906114f4565b826108809190610fec565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178167ffffffffffffffff16116108e1576108db8160058460ff16901b60ff161784610b1490919063ffffffff16565b50610a2a565b60ff8167ffffffffffffffff161161093757610910601860058460ff16901b1784610b1490919063ffffffff16565b506109318167ffffffffffffffff16600185610b349092919063ffffffff16565b50610a29565b61ffff8167ffffffffffffffff161161098e57610967601960058460ff16901b1784610b1490919063ffffffff16565b506109888167ffffffffffffffff16600285610b349092919063ffffffff16565b50610a28565b63ffffffff8167ffffffffffffffff16116109e7576109c0601a60058460ff16901b1784610b1490919063ffffffff16565b506109e18167ffffffffffffffff16600485610b349092919063ffffffff16565b50610a27565b610a04601b60058460ff16901b1784610b1490919063ffffffff16565b50610a258167ffffffffffffffff16600885610b349092919063ffffffff16565b505b5b5b5b505050565b610a37610dfb565b610a4983846000015151848551610b56565b905092915050565b610a6f60036005600660ff16901b1783610b1490919063ffffffff16565b50610ac482827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610aa091906111e6565b604051602001610ab09190610eff565b604051602081830303815290604052610c45565b5050565b610ae660026005600660ff16901b1783610b1490919063ffffffff16565b50610b108282604051602001610afc9190610eff565b604051602081830303815290604052610c45565b5050565b610b1c610dfb565b610b2c8384600001515184610c6a565b905092915050565b610b3c610dfb565b610b4d848560000151518585610cc0565b90509392505050565b610b5e610dfb565b8251821115610b6c57600080fd5b84602001518285610b7d9190610fec565b1115610bb257610bb1856002610ba288602001518887610b9d9190610fec565b610d4e565b610bac9190611528565b610d6a565b5b600080865180518760208301019350808887011115610bd15787860182525b60208701925050505b60208410610c185780518252602082610bf39190610fec565b9150602081610c029190610fec565b9050602084610c1191906114f4565b9350610bda565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b610c5282600283516108aa565b610c658183610a2f90919063ffffffff16565b505050565b610c72610dfb565b83602001518310610c9857610c978460028660200151610c929190611528565b610d6a565b5b83518051602085830101848153818603610cb3576001820183525b5050508390509392505050565b610cc8610dfb565b84602001518483610cd99190610fec565b1115610d0157610d008560028685610cf19190610fec565b610cfb9190611528565b610d6a565b5b6000600183610100610d1391906116b5565b610d1d91906114f4565b90508551838682010185831982511617815281518588011115610d405784870182525b505085915050949350505050565b600081831115610d6057829050610d64565b8190505b92915050565b600082600001519050610d7d8383610840565b50610d888382610a2f565b50505050565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001610df5610dfb565b81525090565b604051806040016040528060608152602001600081525090565b600080fd5b6000819050919050565b610e2d81610e1a565b8114610e3857600080fd5b50565b600081359050610e4a81610e24565b92915050565b6000819050919050565b610e6381610e50565b8114610e6e57600080fd5b50565b600081359050610e8081610e5a565b92915050565b60008060408385031215610e9d57610e9c610e15565b5b6000610eab85828601610e3b565b9250506020610ebc85828601610e71565b9150509250929050565b610ecf81610e1a565b82525050565b6000602082019050610eea6000830184610ec6565b92915050565b610ef981610e50565b82525050565b6000602082019050610f146000830184610ef0565b92915050565b600082825260208201905092915050565b7f536f75726365206d75737420626520746865206f7261636c65206f662074686560008201527f2072657175657374000000000000000000000000000000000000000000000000602082015250565b6000610f87602883610f1a565b9150610f9282610f2b565b604082019050919050565b60006020820190508181036000830152610fb681610f7a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ff782610e50565b915061100283610e50565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561103757611036610fbd565b5b828201905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061106d82611042565b9050919050565b61107d81611062565b82525050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6110b881611083565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110f85780820151818401526020810190506110dd565b83811115611107576000848401525b50505050565b6000601f19601f8301169050919050565b6000611129826110be565b61113381856110c9565b93506111438185602086016110da565b61114c8161110d565b840191505092915050565b60006101008201905061116d600083018b611074565b61117a602083018a610ef0565b6111876040830189610ec6565b6111946060830188611074565b6111a160808301876110af565b6111ae60a0830186610ef0565b6111bb60c0830185610ef0565b81810360e08301526111cd818461111e565b90509998505050505050505050565b6000819050919050565b60006111f1826111dc565b91506111fc836111dc565b9250827f80000000000000000000000000000000000000000000000000000000000000000182126000841215161561123757611236610fbd565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01821360008412161561126f5761126e610fbd565b5b828203905092915050565b6000819050919050565b600061129f61129a61129584611042565b61127a565b611042565b9050919050565b60006112b182611284565b9050919050565b60006112c3826112a6565b9050919050565b60008160601b9050919050565b60006112e2826112ca565b9050919050565b60006112f4826112d7565b9050919050565b61130c611307826112b8565b6112e9565b82525050565b6000819050919050565b61132d61132882610e50565b611312565b82525050565b600061133f82856112fb565b60148201915061134f828461131c565b6020820191508190509392505050565b60006060820190506113746000830186611074565b6113816020830185610ef0565b8181036040830152611393818461111e565b9050949350505050565b60008115159050919050565b6113b28161139d565b81146113bd57600080fd5b50565b6000815190506113cf816113a9565b92915050565b6000602082840312156113eb576113ea610e15565b5b60006113f9848285016113c0565b91505092915050565b7f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160008201527f636c650000000000000000000000000000000000000000000000000000000000602082015250565b600061145e602383610f1a565b915061146982611402565b604082019050919050565b6000602082019050818103600083015261148d81611451565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006114ce82610e50565b91506114d983610e50565b9250826114e9576114e8611494565b5b828206905092915050565b60006114ff82610e50565b915061150a83610e50565b92508282101561151d5761151c610fbd565b5b828203905092915050565b600061153382610e50565b915061153e83610e50565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561157757611576610fbd565b5b828202905092915050565b60008160011c9050919050565b6000808291508390505b60018511156115d9578086048111156115b5576115b4610fbd565b5b60018516156115c45780820291505b80810290506115d285611582565b9450611599565b94509492505050565b6000826115f257600190506116ae565b8161160057600090506116ae565b816001811461161657600281146116205761164f565b60019150506116ae565b60ff84111561163257611631610fbd565b5b8360020a91508482111561164957611648610fbd565b5b506116ae565b5060208310610133831016604e8410600b84101617156116845782820a90508381111561167f5761167e610fbd565b5b6116ae565b611691848484600161158f565b925090508184048111156116a8576116a7610fbd565b5b81810290505b9392505050565b60006116c082610e50565b91506116cb83610e50565b92506116f87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846115e2565b90509291505056fe68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963656d756c746966756c6c3f6673796d733d455448267473796d733d555344a2646970667358221220a64bde2ca86f3ebe7578c662b2afd1a2e54c26fda13a12f5e86055982566ee2964736f6c634300080d0033";

type APIConsumerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: APIConsumerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class APIConsumer__factory extends ContractFactory {
  constructor(...args: APIConsumerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "APIConsumer";
  }

  deploy(
    _oracle: string,
    _jobId: BytesLike,
    _fee: BigNumberish,
    _link: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<APIConsumer> {
    return super.deploy(
      _oracle,
      _jobId,
      _fee,
      _link,
      overrides || {}
    ) as Promise<APIConsumer>;
  }
  getDeployTransaction(
    _oracle: string,
    _jobId: BytesLike,
    _fee: BigNumberish,
    _link: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _oracle,
      _jobId,
      _fee,
      _link,
      overrides || {}
    );
  }
  attach(address: string): APIConsumer {
    return super.attach(address) as APIConsumer;
  }
  connect(signer: Signer): APIConsumer__factory {
    return super.connect(signer) as APIConsumer__factory;
  }
  static readonly contractName: "APIConsumer";
  public readonly contractName: "APIConsumer";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): APIConsumerInterface {
    return new utils.Interface(_abi) as APIConsumerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): APIConsumer {
    return new Contract(address, _abi, signerOrProvider) as APIConsumer;
  }
}
