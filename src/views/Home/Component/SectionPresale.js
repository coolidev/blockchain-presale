import React, { useState, useContext, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Container, Table, Tooltip } from 'reactstrap';
import CopyToClipboard from "react-copy-to-clipboard";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row } from 'reactstrap';
import { BN } from 'web3-utils';
import useRefresh from '../../../redux/useRefresh'
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";
import "react-step-progress-bar/styles.css";
import { useForm } from "react-hook-form";
import { getFullDisplayBalance, getBalanceNumber } from '../../../crosswise/bn';
import { web3 } from "../../../crosswise/web3";
import {
  getUserDetail,
  getUserDetail2,
  getAmountUnlocked,
  getAmountUnlocked2,
  getTotalDepositedAmount,
  getTotalDepositedAmount2,
  getTotalRewardAmount,
  getTotalRewardAmount2,
  deposit2,
  withdrawToken,
  withdrawToken2,
  checkAllowanceBusd2,
  approveBusd2,
  checkWhitelistMember2,
} from "../../../crosswise/token";
import { getDayHourPeriods } from "../../../widgets/getTimePeriods";
import useCountDown from "../../../widgets/useCountDown";

const SectionPresale = (props) => {
  const address = useSelector(state => state.authUser.address);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [copyText, setCopytext] = useState('Click to copy.');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { fastRefresh } = useRefresh()
  const [amountToDeposit, setAmountToDeposit] = useState();
  const [crssAllowrance, setCrssAllowrance] = useState(web3.utils.toBN(0));
  
  const [depositTime, setDepositTime] = useState(0);
  const [depositAmount, setDepositAmount] = useState(new BN(0));
  const [unlockedAmount, setUnlockedAmount] = useState(new BN(0));
  const [rewardAmount, setRewardAmount] = useState(new BN(0));
  const [withdrawAmount, setWithdrawAmount] = useState(new BN(0));

  const [depositTime2, setDepositTime2] = useState(0);
  const [depositAmount2, setDepositAmount2] = useState(new BN(0));
  const [unlockedAmount2, setUnlockedAmount2] = useState(new BN(0));
  const [rewardAmount2, setRewardAmount2] = useState(new BN(0));
  const [withdrawAmount2, setWithdrawAmount2] = useState(new BN(0));

  const toggle = () => {
    setTooltipOpen(!tooltipOpen);
  }

  useEffect(() => {
    loadUserDetail();
  }, [address, fastRefresh]);

  const loadUserDetail = useCallback(async () => {
    const tokenAllowrance = await checkAllowanceBusd2(address);
    
    setCrssAllowrance(tokenAllowrance);
    
    const result = await getUserDetail(address);
    const amountUnlocked = await getAmountUnlocked(address);
    setRewardAmount(web3.utils.toBN(result.totalRewardAmount));
    setWithdrawAmount(web3.utils.toBN(result.withdrawAmount));
    setDepositAmount(web3.utils.toBN(result.depositAmount));
    setUnlockedAmount(amountUnlocked);
    setDepositTime(parseInt(result.depositTime, 10));

    const result2 = await getUserDetail2(address);
    const amountUnlocked2 = await getAmountUnlocked2(address);
    setRewardAmount2(web3.utils.toBN(result2.totalRewardAmount));
    setWithdrawAmount2(web3.utils.toBN(result2.withdrawAmount));
    setDepositAmount2(web3.utils.toBN(result2.depositAmount)); 
    setUnlockedAmount2(amountUnlocked2);
    setDepositTime2(parseInt(result2.depositTime, 10));
  }, [address]);

  const approveTokens = async () => {
    await approveBusd2(address);
  }

  const buyTokens = async () => {
    if (amountToDeposit < 1) return;
    const checkWhitelist = await checkWhitelistMember2(address);
    if (!checkWhitelist) {
      alert("Your wallet is not yet whitelisted. Please click on \"Get Whitelisted\" on our homepage to whitelist your wallet, or wait for confirmation if you have already done so. ");
      return;
    }
    try {
      await deposit2(web3.utils.toWei(amountToDeposit), address);
    } catch (error) {
      console.log(error);
      alert('Transaction has been reverted by the EVM. Please take a look at browser console and refresh page.');
    }
  }

  const claimToken2 = async () => {
    if (parseFloat(unlockedAmount2.toString()) < 1) {
      alert('You currently do not have any unlocked tokens to withdraw.');
      return;
    }

    await withdrawToken2(unlockedAmount2, address);
  }

  const claimToken = async () => {
    if (parseFloat(unlockedAmount.toString()) < 1) {
      alert('You currently do not have any unlocked tokens to withdraw.');
      return;
    }

    await withdrawToken(unlockedAmount, address);
  }

  const renderRound2 = () => {
    return (
      <div className="d-flex flex-column align-items-center presale-column">
        <div className="presale-info">
          <h5 className="title">
            {`My Round 2 Tokens`}
          </h5>
          <div className="presale_round2">
            <div className="presale_info carousel-first">
              <div className="rectangle">
                <p>Total Deposited</p>
                <h6>{getFullDisplayBalance(depositAmount2, 18, 2)} BUSD</h6>
              </div>
              <div className="rectangle">
                <p>Total Received</p>
                <h6>{getFullDisplayBalance(rewardAmount2, 18, 2)} CRSS</h6>
              </div>
            </div>

            <div className="presale_info carousel-second">
              <div className="rectangle">
                <p>Unlocked Tokens</p>
                <h6>{getFullDisplayBalance(unlockedAmount2, 18, 2)} CRSS</h6>
              </div>
              <div className="rectangle">
                <p>Total Withdrawn</p>
                <h6>{getFullDisplayBalance(withdrawAmount2, 18, 2)} CRSS</h6>
              </div>
            </div>

            <div className="claim_section">
              <button
                className={`btn btn_primary claim-button presale-btns
                  ${getBalanceNumber(unlockedAmount2, 18) < 1 ? 'disabled' : ''}`}
                onClick={claimToken2}
              >
                Withdraw Tokens
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderRound1 = () => {
    return (
      <div className="d-flex flex-column align-items-center presale-column">
        <div className="presale-info">
          <h5 className="title">
            {`My Round 1 Tokens`}
          </h5>
          <div className="presale_round1">
            <div className="presale_info carousel-first">
              <div className="rectangle">
                <p>Total Deposited</p>
                <h6>{getFullDisplayBalance(depositAmount, 18, 2)} BUSD</h6>
              </div>
              <div className="rectangle">
                <p>Total Received</p>
                <h6>{getFullDisplayBalance(rewardAmount, 18, 2)} CRSS</h6>
              </div>
            </div>

            <div className="presale_info carousel-second">
              <div className="rectangle">
                <p>Unlocked Tokens</p>
                <h6>{getFullDisplayBalance(unlockedAmount, 18, 2)} CRSS</h6>
              </div>
              <div className="rectangle">
                <p>Total Withdrawn</p>
                <h6>{getFullDisplayBalance(withdrawAmount, 18, 2)} CRSS</h6>
              </div>
            </div>

            <div className="claim_section">
              <button
                className={`btn btn_primary claim-button presale-btns
                  ${getBalanceNumber(unlockedAmount, 18, 2) < 1 ? 'disabled' : ''}`}
                onClick={claimToken}
              >
                Withdraw Tokens
              </button>
            </div>
          </div>
        </div>
        {/* <div className="presale-vesting mb-3">
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Deposited</th>
                <th>Received</th>
                <th>Unlocks In</th>
              </tr>
            </thead>
            <tbody>
              {remains1.map((pair, index) => {
                if (pair[0] < 1 && pair[1] < 1) return null;
                return (
                  <tr key={`${index}th`}>
                    <td>
                      <h6>{
                        depositTime > 0 ? `${format(depositTime * 1000, 'dd MMM yyyy HH:mm')} UTC` : '---'
                      }</h6>
                    </td>
                    <td>
                      <h6>{
                        getFullDisplayBalance(
                          depositAmount.mul(new BN(index + 1)).div(new BN(5)), 18, 2
                        )
                      } BUSD</h6>
                    </td>
                    <td>
                      <h6>{
                        getFullDisplayBalance(
                          rewardAmount.mul(new BN(index + 1)).div(new BN(5)), 18, 2
                        )
                      } CRSS</h6>
                    </td>
                    <td>
                      <h6>{pair[0] ? pair[0] : 0} days {pair[1] ? pair[1] : 0} hours</h6>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div> */}
      </div>
    );
  }

  return (
    <section className="header_section section-presale h-100">
      <Tooltip placement="top" isOpen={tooltipOpen} target="address-tooltip" toggle={toggle}>
        {copyText}
      </Tooltip>

      <Container className="buy-token-container">
        <Row className="w-100">
          <div className="presale-wrap w-100 mt-3">
            <div className="presale-info">
              <h5 className="title"> Buy Round 2 Tokens</h5>
              <p>Wallet address</p>
              <div className="wallet-address">
                <span>{address}</span>
              </div>
              <form onSubmit={(crssAllowrance > web3.utils.toBN(100))
                ? handleSubmit(buyTokens)
                : handleSubmit(approveTokens)}
              >
                <p>Amount</p>
                <div className="input-group custom-address-section">
                  <input
                    {...register('amount', { required: true, pattern: /\d+/ })}
                    className="form-control buy-token-amount"
                    value={amountToDeposit}
                    onChange={event => setAmountToDeposit(event.target.value)}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text buy-token-currency">
                      <p>BUSD</p>
                      <img
                        src="assets/images/busdsm.png"
                        className="rounded-circle"
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                {crssAllowrance.toString() !== "0"
                  ? (
                      errors.amount && <p style={{ color: "red" }}>
                      Please enter the amount of BUSD you wish to invest.</p>
                    ) : (<p></p>)}
                <div className="buy-tokens">
                  {
                    crssAllowrance.toString() === "0" ? (<button className="btn btn_primary presale-btns" onClick={approveTokens} disabled={true}>
                      Approve Contract </button>) :
                      (
                        <button className="btn btn_primary buy-token-btn presale-btns" type="submit" disabled={true}>
                          Buy Tokens
                        </button>
                      )
                  }
                </div>
              </form>
            </div>

            <div className="presale-sub-desc">
              <h5 className="info_desc mx-auto pb-30">Token Vesting</h5>
              <p>
                Tokens are vested within <b className="textBlue">5 months</b> linearly, with <b className="textBlue">20%</b> unlocked every <b className="textBlue">30 days</b>, from time of purchase. That means every 30 days, 20% of that batch of tokens will be unlocked and ready to withdraw to your wallet. Please add the CRSS token address to your wallet so that your tokens are visible in your assets once you withdraw them:
              </p>
              <p className="presale-address">
                <CopyToClipboard
                  text={'0x0999ba9aEA33DcA5B615fFc9F8f88D260eAB74F1'}
                  id="address-tooltip"
                  onCopy={() => {
                    setCopytext('Copied');
                  }}
                  onMouseOut={() => {
                    setCopytext('Click to copy.');
                  }}
                >
                  <b className="textBlue">0x0999ba9aEA33DcA5B615fFc9F8f88D260eAB74F1</b>
                </CopyToClipboard>
              </p>
              <p>
                You can leave your tokens until we launch in December. At that point you can withdraw the unlocked balance, to farm or provide liquidity to earn more CRSS!
              </p>
            </div>
          </div>
          <div className="w-100 mobile">
            <div className="d-flex flex-row justify-content-center flex-wrap w-100">
              {renderRound2()}
              {renderRound1()}            
            </div>
          </div>
          <div className="w-100 desktop">
            <div className="d-flex flex-row justify-content-center flex-wrap w-100">
              {renderRound1()}
              {renderRound2()}            
            </div>
          </div>
        </Row>
      </Container>
    </section >
  );
}

export default SectionPresale;