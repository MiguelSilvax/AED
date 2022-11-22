<?php 

	class Dashboard extends Controllers{
		public function __construct()
		{
			parent::__construct();
			session_start();
			session_regenerate_id(true);
			if(empty($_SESSION['login']))
			{
				header('Location: '.base_url().'/login');
			}
			getPermisos(1);
		}

		public function dashboard()
		{
			$data['page_id'] = 2;
			$data['page_tag'] = "Proveedor - Tienda Virtual";
			$data['page_title'] = "Proveedor - Tienda Virtual";
			$data['page_name'] = "Proveedor";
			$data['page_functions_js'] = "functions_dashboard.js";
			$data['estiloProv'] = "proveedor.css";
			$data['projs'] = "proveedor.js";
			$this->views->getView($this,"dashboard",$data);
		}

	}
 ?>