<?php 
class Pedidos extends Controllers{
    public function __construct()
    {
        parent::__construct();
        session_start();
        if (empty($_SESSION['login'])) {
            header('Location: ' . base_url() . '/pedidos');
        }
        getPermisos(1);
    }

     function Pedidos()
    {
        if (empty($_SESSION['permisosMod']['r'])) {
            header("Location:" . base_url() . '/pedidos');
        }
        $data['page_tag'] = "Pedidos";
        $data['page_title'] = "Pedidos <small>Registrar pedidos</small>";
        $data['page_name'] = "pedidos";
        $data['page_functions_js'] = "pedidos.js";
        $data['page_style_css'] = "bulma.min.css";
        $data['page_style_pedidos_css'] = "pedidos.css";
        $this->views->getView($this, "pedidos", $data);
    }
}

?>