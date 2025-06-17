/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Ambient,
  Ambient_AuthorityTransfer,
  Ambient_CrocColdCmd,
  Ambient_CrocColdProtocolCmd,
  Ambient_CrocHotCmd,
  Ambient_CrocKnockoutCmd,
  Ambient_CrocKnockoutCross,
  Ambient_CrocMicroBurnAmbient,
  Ambient_CrocMicroBurnRange,
  Ambient_CrocMicroMintAmbient,
  Ambient_CrocMicroMintRange,
  Ambient_CrocMicroSwap,
  Ambient_CrocSwap,
  Ambient_CrocWarmCmd,
  Ambient_DisablePoolTemplate,
  Ambient_HotPathOpen,
  Ambient_PriceImproveThresh,
  Ambient_ProtocolDividend,
  Ambient_ResyncTakeRate,
  Ambient_SafeMode,
  Ambient_SetNewPoolLiq,
  Ambient_SetPoolTemplate,
  Ambient_SetRelayerTakeRate,
  Ambient_SetTakeRate,
  Ambient_TreasurySet,
  Ambient_UpgradeProxy,
  Castora,
  Castora_ClaimedWinnings,
  Castora_CompletedPool,
  Castora_CreatedPool,
  Castora_Initialized,
  Castora_OwnershipTransferred,
  Castora_Predicted,
  Castora_RoleAdminChanged,
  Castora_RoleGranted,
  Castora_RoleRevoked,
  Castora_Upgraded,
  Clober,
  Clober_Initialized,
  Clober_OwnershipTransferStarted,
  Clober_OwnershipTransferred,
  Clober_RouterMethodAdded,
  Clober_RouterMethodRemoved,
  Clober_Swap,
  Clober_Upgraded,
  Dusted,
  Dusted_Claimed,
  Dusted_ClaimsToggled,
  Dusted_OwnershipTransferred,
  Dusted_Withdraw,
  Enjoyoors,
  Enjoyoors_Deposit,
  Enjoyoors_MinDepositChanged,
  Enjoyoors_NewTokenListed,
  Enjoyoors_PauseClaims,
  Enjoyoors_PauseDeposits,
  Enjoyoors_PauseWithdrawals,
  Enjoyoors_ResumeClaims,
  Enjoyoors_ResumeDeposits,
  Enjoyoors_ResumeWithdrawals,
  Enjoyoors_RoleAdminChanged,
  Enjoyoors_RoleGranted,
  Enjoyoors_RoleRevoked,
  Enjoyoors_SupplyLimitDecreased,
  Enjoyoors_SupplyLimitIncreased,
  Enjoyoors_WithdrawalApproverChanged,
  Enjoyoors_WithdrawalClaimed,
  Enjoyoors_WithdrawalRequested,
  Kuru,
  Kuru_Deposit,
  Kuru_Withdrawal,
  Magma,
  Magma_Deposit,
  Magma_Initialized,
  Magma_Withdraw,
  MonTools,
  MonTools_BatchTransfer,
  Monorail,
  Monorail_Aggregated,
  Monorail_AggregatedTrade,
  Monorail_FeeMultiplierUpdated,
  Monorail_FeeReceiverUpdated,
  Monorail_NativeSenderAllowlistUpdated,
  Monorail_OwnershipTransferred,
  Monorail_RouterAllowlistUpdated,
  Monorail_TokenWithdrawn,
  Madness,
  Madness_Approval,
  Madness_Burn,
  Madness_OwnershipTransferred,
  Madness_Suspended,
  Madness_Transfer,
  Madness_UpdateBlacklist,
  Madness_UpdateOperator,
  Monad2048,
  Monad2048_NewGame,
  Monad2048_NewMove,
  RugRumble,
  RugRumble_GameEnded,
  RugRumble_GameSet,
  RugRumble_GameStarted,
  RugRumble_TokenDeposited,
  RugRumble_WagerDistributed,
  SwingMonad,
  SwingMonad_Deposit,
  SwingMonad_OwnershipTransferred,
  SwingMonad_Withdraw,
  ZkSwap,
  ZkSwap_Approval,
  ZkSwap_ApprovalForAll,
  ZkSwap_Collect,
  ZkSwap_DecreaseLiquidity,
  ZkSwap_IncreaseLiquidity,
  ZkSwap_Transfer,
} from "generated";

Ambient.AuthorityTransfer.handler(async ({ event, context }) => {
  const entity: Ambient_AuthorityTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    authority: event.params.authority,
  };

  context.Ambient_AuthorityTransfer.set(entity);
});

Ambient.CrocColdCmd.handler(async ({ event, context }) => {
  const entity: Ambient_CrocColdCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
  };

  context.Ambient_CrocColdCmd.set(entity);
});

Ambient.CrocColdProtocolCmd.handler(async ({ event, context }) => {
  const entity: Ambient_CrocColdProtocolCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
  };

  context.Ambient_CrocColdProtocolCmd.set(entity);
});

Ambient.CrocHotCmd.handler(async ({ event, context }) => {
  const entity: Ambient_CrocHotCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    baseFlow: event.params.baseFlow,
    quoteFlow: event.params.quoteFlow,
  };

  context.Ambient_CrocHotCmd.set(entity);
});

Ambient.CrocKnockoutCmd.handler(async ({ event, context }) => {
  const entity: Ambient_CrocKnockoutCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    baseFlow: event.params.baseFlow,
    quoteFlow: event.params.quoteFlow,
  };

  context.Ambient_CrocKnockoutCmd.set(entity);
});

Ambient.CrocKnockoutCross.handler(async ({ event, context }) => {
  const entity: Ambient_CrocKnockoutCross = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pool: event.params.pool,
    tick: event.params.tick,
    isBid: event.params.isBid,
    pivotTime: event.params.pivotTime,
    feeMileage: event.params.feeMileage,
    commitEntropy: event.params.commitEntropy,
  };

  context.Ambient_CrocKnockoutCross.set(entity);
});

Ambient.CrocMicroBurnAmbient.handler(async ({ event, context }) => {
  const entity: Ambient_CrocMicroBurnAmbient = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambient_CrocMicroBurnAmbient.set(entity);
});

Ambient.CrocMicroBurnRange.handler(async ({ event, context }) => {
  const entity: Ambient_CrocMicroBurnRange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambient_CrocMicroBurnRange.set(entity);
});

Ambient.CrocMicroMintAmbient.handler(async ({ event, context }) => {
  const entity: Ambient_CrocMicroMintAmbient = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambient_CrocMicroMintAmbient.set(entity);
});

Ambient.CrocMicroMintRange.handler(async ({ event, context }) => {
  const entity: Ambient_CrocMicroMintRange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambient_CrocMicroMintRange.set(entity);
});

Ambient.CrocMicroSwap.handler(async ({ event, context }) => {
  const entity: Ambient_CrocMicroSwap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambient_CrocMicroSwap.set(entity);
});

Ambient.CrocSwap.handler(async ({ event, context }) => {
  const entity: Ambient_CrocSwap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    base: event.params.base,
    quote: event.params.quote,
    poolIdx: event.params.poolIdx,
    isBuy: event.params.isBuy,
    inBaseQty: event.params.inBaseQty,
    qty: event.params.qty,
    tip: event.params.tip,
    limitPrice: event.params.limitPrice,
    minOut: event.params.minOut,
    reserveFlags: event.params.reserveFlags,
    baseFlow: event.params.baseFlow,
    quoteFlow: event.params.quoteFlow,
  };

  context.Ambient_CrocSwap.set(entity);
});

Ambient.CrocWarmCmd.handler(async ({ event, context }) => {
  const entity: Ambient_CrocWarmCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    baseFlow: event.params.baseFlow,
    quoteFlow: event.params.quoteFlow,
  };

  context.Ambient_CrocWarmCmd.set(entity);
});

Ambient.DisablePoolTemplate.handler(async ({ event, context }) => {
  const entity: Ambient_DisablePoolTemplate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolIdx: event.params.poolIdx,
  };

  context.Ambient_DisablePoolTemplate.set(entity);
});

Ambient.HotPathOpen.handler(async ({ event, context }) => {
  const entity: Ambient_HotPathOpen = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _0: event.params._0,
  };

  context.Ambient_HotPathOpen.set(entity);
});

Ambient.PriceImproveThresh.handler(async ({ event, context }) => {
  const entity: Ambient_PriceImproveThresh = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    unitTickCollateral: event.params.unitTickCollateral,
    awayTickTol: event.params.awayTickTol,
  };

  context.Ambient_PriceImproveThresh.set(entity);
});

Ambient.ProtocolDividend.handler(async ({ event, context }) => {
  const entity: Ambient_ProtocolDividend = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    recv: event.params.recv,
  };

  context.Ambient_ProtocolDividend.set(entity);
});

Ambient.ResyncTakeRate.handler(async ({ event, context }) => {
  const entity: Ambient_ResyncTakeRate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    base: event.params.base,
    quote: event.params.quote,
    poolIdx: event.params.poolIdx,
    takeRate: event.params.takeRate,
  };

  context.Ambient_ResyncTakeRate.set(entity);
});

Ambient.SafeMode.handler(async ({ event, context }) => {
  const entity: Ambient_SafeMode = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _0: event.params._0,
  };

  context.Ambient_SafeMode.set(entity);
});

Ambient.SetNewPoolLiq.handler(async ({ event, context }) => {
  const entity: Ambient_SetNewPoolLiq = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    liq: event.params.liq,
  };

  context.Ambient_SetNewPoolLiq.set(entity);
});

Ambient.SetPoolTemplate.handler(async ({ event, context }) => {
  const entity: Ambient_SetPoolTemplate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolIdx: event.params.poolIdx,
    feeRate: event.params.feeRate,
    tickSize: event.params.tickSize,
    jitThresh: event.params.jitThresh,
    knockout: event.params.knockout,
    oracleFlags: event.params.oracleFlags,
  };

  context.Ambient_SetPoolTemplate.set(entity);
});

Ambient.SetRelayerTakeRate.handler(async ({ event, context }) => {
  const entity: Ambient_SetRelayerTakeRate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    takeRate: event.params.takeRate,
  };

  context.Ambient_SetRelayerTakeRate.set(entity);
});

Ambient.SetTakeRate.handler(async ({ event, context }) => {
  const entity: Ambient_SetTakeRate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    takeRate: event.params.takeRate,
  };

  context.Ambient_SetTakeRate.set(entity);
});

Ambient.TreasurySet.handler(async ({ event, context }) => {
  const entity: Ambient_TreasurySet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    treasury: event.params.treasury,
    startTime: event.params.startTime,
  };

  context.Ambient_TreasurySet.set(entity);
});

Ambient.UpgradeProxy.handler(async ({ event, context }) => {
  const entity: Ambient_UpgradeProxy = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proxy: event.params.proxy,
    proxyIdx: event.params.proxyIdx,
  };

  context.Ambient_UpgradeProxy.set(entity);
});

Castora.ClaimedWinnings.handler(async ({ event, context }) => {
  const entity: Castora_ClaimedWinnings = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolId: event.params.poolId,
    predictionId: event.params.predictionId,
    winner: event.params.winner,
    stakeToken: event.params.stakeToken,
    stakedAmount: event.params.stakedAmount,
    wonAmount: event.params.wonAmount,
  };

  context.Castora_ClaimedWinnings.set(entity);
});

Castora.CompletedPool.handler(async ({ event, context }) => {
  const entity: Castora_CompletedPool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolId: event.params.poolId,
    snapshotTime: event.params.snapshotTime,
    snapshotPrice: event.params.snapshotPrice,
    winAmount: event.params.winAmount,
    noOfWinners: event.params.noOfWinners,
  };

  context.Castora_CompletedPool.set(entity);
});

Castora.CreatedPool.handler(async ({ event, context }) => {
  const entity: Castora_CreatedPool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolId: event.params.poolId,
    seedsHash: event.params.seedsHash,
  };

  context.Castora_CreatedPool.set(entity);
});

Castora.Initialized.handler(async ({ event, context }) => {
  const entity: Castora_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Castora_Initialized.set(entity);
});

Castora.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Castora_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Castora_OwnershipTransferred.set(entity);
});

Castora.Predicted.handler(async ({ event, context }) => {
  const entity: Castora_Predicted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolId: event.params.poolId,
    predictionId: event.params.predictionId,
    predicter: event.params.predicter,
    predictionPrice: event.params.predictionPrice,
  };

  context.Castora_Predicted.set(entity);
});

Castora.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: Castora_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.Castora_RoleAdminChanged.set(entity);
});

Castora.RoleGranted.handler(async ({ event, context }) => {
  const entity: Castora_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Castora_RoleGranted.set(entity);
});

Castora.RoleRevoked.handler(async ({ event, context }) => {
  const entity: Castora_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Castora_RoleRevoked.set(entity);
});

Castora.Upgraded.handler(async ({ event, context }) => {
  const entity: Castora_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.Castora_Upgraded.set(entity);
});

Clober.Initialized.handler(async ({ event, context }) => {
  const entity: Clober_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Clober_Initialized.set(entity);
});

Clober.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: Clober_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Clober_OwnershipTransferStarted.set(entity);
});

Clober.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Clober_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Clober_OwnershipTransferred.set(entity);
});

Clober.RouterMethodAdded.handler(async ({ event, context }) => {
  const entity: Clober_RouterMethodAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    router: event.params.router,
    method: event.params.method,
  };

  context.Clober_RouterMethodAdded.set(entity);
});

Clober.RouterMethodRemoved.handler(async ({ event, context }) => {
  const entity: Clober_RouterMethodRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    router: event.params.router,
    method: event.params.method,
  };

  context.Clober_RouterMethodRemoved.set(entity);
});

Clober.Swap.handler(async ({ event, context }) => {
  const entity: Clober_Swap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    inToken: event.params.inToken,
    outToken: event.params.outToken,
    amountIn: event.params.amountIn,
    amountOut: event.params.amountOut,
    router: event.params.router,
    method: event.params.method,
  };

  context.Clober_Swap.set(entity);
});

Clober.Upgraded.handler(async ({ event, context }) => {
  const entity: Clober_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.Clober_Upgraded.set(entity);
});

Dusted.Claimed.handler(async ({ event, context }) => {
  const entity: Dusted_Claimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    tokenAmount: event.params.tokenAmount,
    totalPointsClaimed: event.params.totalPointsClaimed,
  };

  context.Dusted_Claimed.set(entity);
});

Dusted.ClaimsToggled.handler(async ({ event, context }) => {
  const entity: Dusted_ClaimsToggled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    enabled: event.params.enabled,
  };

  context.Dusted_ClaimsToggled.set(entity);
});

Dusted.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Dusted_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Dusted_OwnershipTransferred.set(entity);
});

Dusted.Withdraw.handler(async ({ event, context }) => {
  const entity: Dusted_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.Dusted_Withdraw.set(entity);
});

Enjoyoors.Deposit.handler(async ({ event, context }) => {
  const entity: Enjoyoors_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.Enjoyoors_Deposit.set(entity);
});

Enjoyoors.MinDepositChanged.handler(async ({ event, context }) => {
  const entity: Enjoyoors_MinDepositChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    _old: event.params._old,
    _new: event.params._new,
  };

  context.Enjoyoors_MinDepositChanged.set(entity);
});

Enjoyoors.NewTokenListed.handler(async ({ event, context }) => {
  const entity: Enjoyoors_NewTokenListed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newToken: event.params.newToken,
  };

  context.Enjoyoors_NewTokenListed.set(entity);
});

Enjoyoors.PauseClaims.handler(async ({ event, context }) => {
  const entity: Enjoyoors_PauseClaims = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
  };

  context.Enjoyoors_PauseClaims.set(entity);
});

Enjoyoors.PauseDeposits.handler(async ({ event, context }) => {
  const entity: Enjoyoors_PauseDeposits = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
  };

  context.Enjoyoors_PauseDeposits.set(entity);
});

Enjoyoors.PauseWithdrawals.handler(async ({ event, context }) => {
  const entity: Enjoyoors_PauseWithdrawals = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
  };

  context.Enjoyoors_PauseWithdrawals.set(entity);
});

Enjoyoors.ResumeClaims.handler(async ({ event, context }) => {
  const entity: Enjoyoors_ResumeClaims = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
  };

  context.Enjoyoors_ResumeClaims.set(entity);
});

Enjoyoors.ResumeDeposits.handler(async ({ event, context }) => {
  const entity: Enjoyoors_ResumeDeposits = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
  };

  context.Enjoyoors_ResumeDeposits.set(entity);
});

Enjoyoors.ResumeWithdrawals.handler(async ({ event, context }) => {
  const entity: Enjoyoors_ResumeWithdrawals = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
  };

  context.Enjoyoors_ResumeWithdrawals.set(entity);
});

Enjoyoors.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: Enjoyoors_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.Enjoyoors_RoleAdminChanged.set(entity);
});

Enjoyoors.RoleGranted.handler(async ({ event, context }) => {
  const entity: Enjoyoors_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Enjoyoors_RoleGranted.set(entity);
});

Enjoyoors.RoleRevoked.handler(async ({ event, context }) => {
  const entity: Enjoyoors_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Enjoyoors_RoleRevoked.set(entity);
});

Enjoyoors.SupplyLimitDecreased.handler(async ({ event, context }) => {
  const entity: Enjoyoors_SupplyLimitDecreased = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    delta: event.params.delta,
  };

  context.Enjoyoors_SupplyLimitDecreased.set(entity);
});

Enjoyoors.SupplyLimitIncreased.handler(async ({ event, context }) => {
  const entity: Enjoyoors_SupplyLimitIncreased = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    delta: event.params.delta,
  };

  context.Enjoyoors_SupplyLimitIncreased.set(entity);
});

Enjoyoors.WithdrawalApproverChanged.handler(async ({ event, context }) => {
  const entity: Enjoyoors_WithdrawalApproverChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _old: event.params._old,
    _new: event.params._new,
  };

  context.Enjoyoors_WithdrawalApproverChanged.set(entity);
});

Enjoyoors.WithdrawalClaimed.handler(async ({ event, context }) => {
  const entity: Enjoyoors_WithdrawalClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    requestId: event.params.requestId,
    amount: event.params.amount,
  };

  context.Enjoyoors_WithdrawalClaimed.set(entity);
});

Enjoyoors.WithdrawalRequested.handler(async ({ event, context }) => {
  const entity: Enjoyoors_WithdrawalRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    user: event.params.user,
    requestId: event.params.requestId,
    amount: event.params.amount,
  };

  context.Enjoyoors_WithdrawalRequested.set(entity);
});

Kuru.Deposit.handler(async ({ event, context }) => {
  const entity: Kuru_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    token: event.params.token,
    amount: event.params.amount,
  };

  context.Kuru_Deposit.set(entity);
});

Kuru.Withdrawal.handler(async ({ event, context }) => {
  const entity: Kuru_Withdrawal = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    token: event.params.token,
    amount: event.params.amount,
  };

  context.Kuru_Withdrawal.set(entity);
});

Magma.Deposit.handler(async ({ event, context }) => {
  const entity: Magma_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    depositor: event.params.depositor,
    amount: event.params.amount,
    gMonMinted: event.params.gMonMinted,
    referralId: event.params.referralId,
  };

  context.Magma_Deposit.set(entity);
});

Magma.Initialized.handler(async ({ event, context }) => {
  const entity: Magma_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Magma_Initialized.set(entity);
});

Magma.Withdraw.handler(async ({ event, context }) => {
  const entity: Magma_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    withdrawer: event.params.withdrawer,
    amount: event.params.amount,
    gMonBurned: event.params.gMonBurned,
  };

  context.Magma_Withdraw.set(entity);
});

MonTools.BatchTransfer.handler(async ({ event, context }) => {
  const entity: MonTools_BatchTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.MonTools_BatchTransfer.set(entity);
});

Monorail.Aggregated.handler(async ({ event, context }) => {
  const entity: Monorail_Aggregated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    tokenIn: event.params.tokenIn,
    tokenOut: event.params.tokenOut,
    amount: event.params.amount,
    destinationAmount: event.params.destinationAmount,
    feeAmount: event.params.feeAmount,
  };

  context.Monorail_Aggregated.set(entity);
});

Monorail.AggregatedTrade.handler(async ({ event, context }) => {
  const entity: Monorail_AggregatedTrade = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    router: event.params.router,
    tokenIn: event.params.tokenIn,
    tokenOut: event.params.tokenOut,
    amount: event.params.amount,
  };

  context.Monorail_AggregatedTrade.set(entity);
});

Monorail.FeeMultiplierUpdated.handler(async ({ event, context }) => {
  const entity: Monorail_FeeMultiplierUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldFeeMultiplier: event.params.oldFeeMultiplier,
    newFeeMultiplier: event.params.newFeeMultiplier,
  };

  context.Monorail_FeeMultiplierUpdated.set(entity);
});

Monorail.FeeReceiverUpdated.handler(async ({ event, context }) => {
  const entity: Monorail_FeeReceiverUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldFeeReceiver: event.params.oldFeeReceiver,
    newFeeReceiver: event.params.newFeeReceiver,
  };

  context.Monorail_FeeReceiverUpdated.set(entity);
});

Monorail.NativeSenderAllowlistUpdated.handler(async ({ event, context }) => {
  const entity: Monorail_NativeSenderAllowlistUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    allowed: event.params.allowed,
  };

  context.Monorail_NativeSenderAllowlistUpdated.set(entity);
});

Monorail.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Monorail_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Monorail_OwnershipTransferred.set(entity);
});

Monorail.RouterAllowlistUpdated.handler(async ({ event, context }) => {
  const entity: Monorail_RouterAllowlistUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    router: event.params.router,
    allowed: event.params.allowed,
  };

  context.Monorail_RouterAllowlistUpdated.set(entity);
});

Monorail.TokenWithdrawn.handler(async ({ event, context }) => {
  const entity: Monorail_TokenWithdrawn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.Monorail_TokenWithdrawn.set(entity);
});

Madness.Approval.handler(async ({ event, context }) => {
  const entity: Madness_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Madness_Approval.set(entity);
});

Madness.Burn.handler(async ({ event, context }) => {
  const entity: Madness_Burn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    amount: event.params.amount,
  };

  context.Madness_Burn.set(entity);
});

Madness.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Madness_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Madness_OwnershipTransferred.set(entity);
});

Madness.Suspended.handler(async ({ event, context }) => {
  const entity: Madness_Suspended = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    suspended: event.params.suspended,
  };

  context.Madness_Suspended.set(entity);
});

Madness.Transfer.handler(async ({ event, context }) => {
  const entity: Madness_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Madness_Transfer.set(entity);
});

Madness.UpdateBlacklist.handler(async ({ event, context }) => {
  const entity: Madness_UpdateBlacklist = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    isListed: event.params.isListed,
  };

  context.Madness_UpdateBlacklist.set(entity);
});

Madness.UpdateOperator.handler(async ({ event, context }) => {
  const entity: Madness_UpdateOperator = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    operator: event.params.operator,
    authorized: event.params.authorized,
  };

  context.Madness_UpdateOperator.set(entity);
});

Monad2048.NewGame.handler(async ({ event, context }) => {
  const entity: Monad2048_NewGame = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    event_id: event.params.id,
    board: event.params.board,
  };

  context.Monad2048_NewGame.set(entity);
});

Monad2048.NewMove.handler(async ({ event, context }) => {
  const entity: Monad2048_NewMove = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    player: event.params.player,
    event_id: event.params.id,
    move: event.params.move,
    result: event.params.result,
  };

  context.Monad2048_NewMove.set(entity);
});

RugRumble.GameEnded.handler(async ({ event, context }) => {
  const entity: RugRumble_GameEnded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    winner: event.params.winner,
    loser: event.params.loser,
    epochId: event.params.epochId,
    rewardAmount: event.params.rewardAmount,
    winnerToken: event.params.winnerToken,
    loserToken: event.params.loserToken,
  };

  context.RugRumble_GameEnded.set(entity);
});

RugRumble.GameSet.handler(async ({ event, context }) => {
  const entity: RugRumble_GameSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    epochId: event.params.epochId,
    token1: event.params.token1,
    token2: event.params.token2,
    wagerAmount1: event.params.wagerAmount1,
    wagerAmount2: event.params.wagerAmount2,
  };

  context.RugRumble_GameSet.set(entity);
});

RugRumble.GameStarted.handler(async ({ event, context }) => {
  const entity: RugRumble_GameStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    player1: event.params.player1,
    player2: event.params.player2,
    epochId: event.params.epochId,
  };

  context.RugRumble_GameStarted.set(entity);
});

RugRumble.TokenDeposited.handler(async ({ event, context }) => {
  const entity: RugRumble_TokenDeposited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    player: event.params.player,
    token: event.params.token,
    epochId: event.params.epochId,
    amount: event.params.amount,
  };

  context.RugRumble_TokenDeposited.set(entity);
});

RugRumble.WagerDistributed.handler(async ({ event, context }) => {
  const entity: RugRumble_WagerDistributed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gameId: event.params.gameId,
    winner: event.params.winner,
    winnerShare: event.params.winnerShare,
    vaultShare: event.params.vaultShare,
    protocolShare: event.params.protocolShare,
    winnerToken: event.params.winnerToken,
    loserToken: event.params.loserToken,
  };

  context.RugRumble_WagerDistributed.set(entity);
});

SwingMonad.Deposit.handler(async ({ event, context }) => {
  const entity: SwingMonad_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.SwingMonad_Deposit.set(entity);
});

SwingMonad.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: SwingMonad_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.SwingMonad_OwnershipTransferred.set(entity);
});

SwingMonad.Withdraw.handler(async ({ event, context }) => {
  const entity: SwingMonad_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.SwingMonad_Withdraw.set(entity);
});

ZkSwap.Approval.handler(async ({ event, context }) => {
  const entity: ZkSwap_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.ZkSwap_Approval.set(entity);
});

ZkSwap.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: ZkSwap_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.ZkSwap_ApprovalForAll.set(entity);
});

ZkSwap.Collect.handler(async ({ event, context }) => {
  const entity: ZkSwap_Collect = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.ZkSwap_Collect.set(entity);
});

ZkSwap.DecreaseLiquidity.handler(async ({ event, context }) => {
  const entity: ZkSwap_DecreaseLiquidity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    liquidity: event.params.liquidity,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.ZkSwap_DecreaseLiquidity.set(entity);
});

ZkSwap.IncreaseLiquidity.handler(async ({ event, context }) => {
  const entity: ZkSwap_IncreaseLiquidity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    liquidity: event.params.liquidity,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.ZkSwap_IncreaseLiquidity.set(entity);
});

ZkSwap.Transfer.handler(async ({ event, context }) => {
  const entity: ZkSwap_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.ZkSwap_Transfer.set(entity);
});
