// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const OwnerModule = buildModule("OwnerModule", (m) => {
  

  const Owner = m.contract("Owner");

  return { Owner };
});

export default OwnerModule;
