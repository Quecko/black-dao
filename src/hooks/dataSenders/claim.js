import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { ClaimH } from "../../utils/contractHelpers";
import Web3 from "web3";

const ClaimDao = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contractAddress = environment.ClaimAddress;

    const contract = ClaimH(contractAddress, web3);
    const claimTheDao = useCallback(
        async () => {
            try {
                var response = await contract.methods
                    .claim()
                    .send({
                        from: account,
                    })
                return response;
            } catch (error) {
                console.log('Error of the claim', error);
                throw error;

            }




        },
        [account, contract]
    );
    return { claimTheDao: claimTheDao };
};

export default ClaimDao;
