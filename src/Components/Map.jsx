import ReactFlow, { MarkerType } from "reactflow";
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
      style: { width: 130, background: "#e3f2fd" },
    },
    {
      id: "GatewayClient",
      data: { label: t("Overview.nodes.GatewayClient") },
      position: { x: 240, y: 180 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 130, background: "#fffde7" },
    },
   
    {
      id: "Publisher",
      data: { label: t("Overview.nodes.Publisher") },
      position: { x: 540, y: 180 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 130, background: "#e8f5e9" },
    },
   
    {
      id: "Platforms",
      data: { label: t("Overview.nodes.Platforms") },
      position: { x: 820, y: 180 },
      targetPosition: "left",
      sourcePosition: "right",
      style: { width: 130, background: "#e3f2fd" },
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
      target: "Publisher",
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
      source: "Publisher",
      target: "Platforms",
      label: t("Overview.edges.content"),
      type: "straight",
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
      },
    }
  ];

  const nodeClickMap = {
    ClientApp: "Client",
    GatewayClient: "GatewayClient",
    Publisher: "Publisher",
    Platforms: "Platforms",
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
