import React, { useRef, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router";

const VisualizerId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userId } = useOutletContext<AuthContext>();

  const hasInitialGenerated = useRef(false);

  const [project, setProject] = useState<DesignItem | null>(null);
  const [isProjectLoading, setIsProjectLoading] = useState(true);

  const [isProcessing, setIsProcessing] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  return <div>VisualizerId</div>;
};

export default VisualizerId;
