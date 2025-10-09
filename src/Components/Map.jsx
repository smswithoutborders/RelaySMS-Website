import ReactFlow, { 
  Background, 
  Controls, 
  MarkerType,
  ConnectionLineType 
} from "reactflow";
import "reactflow/dist/style.css";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Map = ({ handleDrawerOpen }) => {
  const { t } = useTranslation();

  const nodes = [
    {
      id: "ClientApp",
      type: "input",
      data: { label: t("Overview.nodes.Client") },
      position: { x: 0, y: 180 },
      sourcePosition: "right",
      style: { width: 120, background: "#e3f2fd" },
    },
    {
      id: "GatewayClient",
      data: { label: t("Overview.nodes.GatewayClient") },
      position: { x: 240, y: 180 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 120, background: "#fffde7" },
    },
    {
      id: "GatewayServer",
      data: { label: t("Overview.nodes.GatewayServer") },
      position: { x: 500, y: 180 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 120, background: "#fffde7" },
    },
    {
      id: "Publisher",
      data: { label: t("Overview.nodes.Publisher") },
      position: { x: 540, y: 80 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 120, background: "#e8f5e9" },
    },
    {
      id: "BridgeServer",
      data: { label: t("Overview.nodes.BridgeServer") },
      position: { x: 540, y: 280 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 120, background: "#e8f5e9" },
    },
    {
      id: "Vault",
      data: { label: t("Overview.nodes.Vault") },
      position: { x: 720, y: 180 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 120, background: "#f3e5f5" },
    },
    {
      id: "Platforms",
      data: { label: t("Overview.nodes.Platforms") },
      position: { x: 940, y: 120 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 120, background: "#e3f2fd" },
    },
    {
      id: "EmailBridge",
      data: { label: t("Overview.nodes.EmailBridge") },
      position: { x: 940, y: 280 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 120, background: "#fff3e0" },
    },
  ];

  const edges = [
    {
      id: "e1",
      source: "ClientApp",
      target: "GatewayClient",
      label: t("Overview.edges.encryptedSMS"),
      type: "straight",
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
    },
    {
      id: "e2",
      source: "GatewayClient",
      target: "GatewayServer",
      label: t("Overview.edges.httpsSmtpFtp"),
      type: "straight",
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
    },
    {
      id: "e3",
      source: "GatewayServer",
      target: "Publisher",
      label: t("Overview.edges.platformPayload"),
      type: "smoothstep",
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
    },
    {
      id: "e4",
      source: "GatewayServer",
      target: "BridgeServer",
      label: t("Overview.edges.bridgePayload"),
      type: "smoothstep",
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
    },
    {
      id: "e5",
      source: "Publisher",
      target: "Vault",
      label: t("Overview.edges.decryptAuth"),
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
    },
    {
      id: "e6",
      source: "BridgeServer",
      target: "Vault",
      label: t("Overview.edges.decryptAuth"),
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
    },
    {
      id: "e9",
      source: "Publisher",
      target: "Platforms",
      label: t("Overview.edges.content"),
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
    },
    {
      id: "e12",
      source: "BridgeServer",
      target: "EmailBridge",
      type: "straight",
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
    },
  ];

  const nodeClickMap = {
    ClientApp: "Client",
    GatewayClient: "GatewayClient",
    GatewayServer: "GatewayServer",
    Publisher: "Publisher",
    BridgeServer: "BridgeServer",
    Vault: "Vault",
    Platforms: "Platforms",
    EmailBridge: "EmailBridge"
  };

  return (
  <Box
    sx={{
      width: "100%",
      maxWidth: "100vw",
      overflowX: "auto",
      pb: 2,
      my: 5,
    }}
  >
    <Box
      sx={{
        width: { xs: "900px", sm: "100%", md: "100%" },
        minWidth: { xs: "900px", sm: "100%", md: "100%" },
        height: { xs: 400, sm: 500, md: 500 },
        mt: 2,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnDrag={false}
        panOnScroll={false}
        onNodeClick={(event, node) => {
          if (handleDrawerOpen && nodeClickMap[node.id]) {
            handleDrawerOpen(nodeClickMap[node.id]);
          }
        }}
      />
    </Box>
  </Box>
  );
};

export default Map;
