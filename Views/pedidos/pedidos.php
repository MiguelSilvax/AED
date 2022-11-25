<?php
headerAdmin($data);
?>

<main class="app-content">

    <div class="card">
        <div class="card-body">
            <h1><?php echo $data['page_title'] ?></h1>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <div class="container">

                <div id="jsonDiv">

                </div>
                <form action="" id="frmUsers">
                    <div class="field is-grouped">

                        <div class="control has-icons-left">
                            <select class="form-control" aria-label=".form-select-lg example" id="sistemaOperativo" name="sistemaOperativo" onchange="cargar_Modelo( this )">
                                <option> Sistema operativo</option>
                            </select>
                        </div>
                        <div class="control has-icons-left">
                            <select class="form-control" aria-label=".form-select-lg example" name="marca" id="marca">
                                <option> Marca </option>
                            </select>
                        </div>





                        <div class="control has-icons-left">
                            <input class="input" name="modelo" type="text" placeholder="Modelo" autocomplete="off">
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <div class="control">
                            <button id="btnAdd" type="button" class="button is-danger">
                                <span class="icon">
                                    <i class="fas fa-plus"></i>
                                </span>
                            </button>
                        </div>
                        <div class="control">
                            <button id="btnSave" type="button" class="button is-info">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
                <hr>
                <div id="divElements">

                </div>
            </div>
        </div>
    </div>


</main>

<?php footerAdmin($data); ?>