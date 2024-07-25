import Web3 from "web3";
export const checkConnect = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setMessage('Connected to Ethereum account');
      } catch (error) {
        console.error("Error connecting to metamask", error);
        setMessage('Error connecting to MetaMask');
      }
    } else {
      setMessage('Please install MetaMask');
    }
  };