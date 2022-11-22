<?php headerAdmin($data); ?>
<main class="app-content">
  <div class="app-title">
    <div>
      <h1><i class="fa fa-user"></i><?= $data['page_title'] ?></h1>
    </div>
    <ul class="app-breadcrumb breadcrumb">
      <li class="breadcrumb-item"><i class="fa fa-user"></i></li>
      <li class="breadcrumb-item"><a href="<?= base_url(); ?>/dashboard">Dashboard</a></li>
    </ul>
  </div>

  <div class="container-prov">
    <form method="get" action="" class="col-4" id="frmPro">
      <div class="form-group">
        <label for="my-input">Nombre completo</label>
        <input class="form-control" type="text" name="nombres" id="nombre">
      </div>
      <div class="form-group">
        <label for="my-input">Apellido completo</label>
        <input class="form-control" type="text" name="apellidos" id="apellido">
      </div>
      <div class="form-group">
        <label for="my-input">Documento de identidad</label>
        <input class="form-control" type="text" name="DNI" id="dni">
      </div>
      <div class="form-group">
        <label for="my-input">Correo electronico</label>
        <input class="form-control" type="text" name="Email" id="mail">
      </div>
      <div class="form-group">
        <label for="my-input">Dirección</label>
        <textarea class="form-control" id="direccion" name="Direccion"></textarea>
      </div>
      <div class="btn-group-horizontal" role="group" aria-label="Vertical button group">
        <button class="btn btn-success mt-4" type="button" id="btnAgregar">Agregar</button>
        <button class="btn btn-danger mt-4" type="Reset" id="btnLimpiar">Limpiar</button>
        <button class="btn btn-primary mt-4" type="button" id="btnGuardar">Guardar</button>
      </div>
    </form>

    <div class="col-4 mt-4">
      <label for="">Buscar</label>
      <input class="form-control" type="text" name="">
    </div>
    <div class="col-12 mt-4" id="productos">
      <table class="table table-striped" id="lista">

        <th>DNI</th>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Email</th>
        <th>Dirección</th>
        <th>Accciones</th>

      </table>
    </div>
    <div class="btn-group" role="group" aria-label="Button group">
      <button class="btn btn-primary" type="button" onclick="sort(0);">Ordenar</button>
    </div>
    <div role="alert" id="alert"></div>
  </div>

  <!-- The Modal -->
  <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" onclick="close();">&times;</span>
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <label for="my-input">Nombre completo</label>
            <input class="form-control" type="text" name="nombres" id="nombreAc">
          </div>
          <div class="form-group">
            <label for="my-input">Apellido completo</label>
            <input class="form-control" type="text" name="apellidos" id="apellidoAc">
          </div>
          <div class="form-group">
            <label for="my-input">Documento de identidad</label>
            <input class="form-control" type="text" name="DNI" id="dniAc">
          </div>
          <div class="form-group">
            <label for="my-input">Correo electronico</label>
            <input class="form-control" type="text" name="Email" id="mailAc">
          </div>
          <div class="form-group">
            <label for="my-input">Dirección</label>
            <textarea class="form-control" id="DireccionAc" name="DireccionAc"></textarea>
          </div>
          <div class="btn-group-horizontal" role="group" aria-label="Vertical button group">
            <button class="btn btn-primary mt-4" type="button" id="tbnActualizar">Actualizar</button>

          </div>
        </div>
      </div>
    </div>

  </div>



</main>
<?php footerAdmin($data); ?>