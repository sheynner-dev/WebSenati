import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Card, Form as BsForm, Container } from "react-bootstrap";

function Contacto() {
  const validationSchema = Yup.object({
    nombres: Yup.string().required("Los nombres son obligatorios"),
    apellidos: Yup.string().required("Los apellidos son obligatorios"),
    direccion: Yup.string().required("La dirección es obligatoria"),
    celular: Yup.string()
      .matches(/^\d+$/, "Solo se permiten números")
      .min(9, "Debe tener al menos 9 dígitos")
      .required("El celular es obligatorio"),
    edad: Yup.number()
      .min(1, "Edad inválida")
      .max(120, "Edad inválida")
      .required("La edad es obligatoria"),
    email: Yup.string()
      .email("Correo inválido")
      .required("El correo es obligatorio"),
    sexo: Yup.string().required("El sexo es obligatorio"),
    mensaje: Yup.string()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .required("El mensaje es obligatorio"),
  });

  const enviarWhatsApp = (values) => {
    const telefono = "51978110873";
    const texto = `📩 Nuevo mensaje de contacto:\n\n👤 Nombres: ${values.nombres}\n👤 Apellidos: ${values.apellidos}\n📍 Dirección: ${values.direccion}\n📱 Celular: ${values.celular}\n🎂 Edad: ${values.edad}\n📧 Email: ${values.email}\n⚧ Sexo: ${values.sexo}\n💬 Mensaje: ${values.mensaje}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="fade-in">
      <Container className="text-center py-5">
        <h1 className="glow-text mb-3">Contacto</h1>
        <p className="mb-4">Déjanos tu mensaje y te responderemos al instante.</p>

        <Formik
          initialValues={{
            nombres: "",
            apellidos: "",
            direccion: "",
            celular: "",
            edad: "",
            email: "",
            sexo: "",
            mensaje: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            enviarWhatsApp(values);
            console.log('Contacto enviado:', values);
            alert('Mensaje enviado con éxito');
            resetForm();
          }}
        >
          {() => (
            <Card className="p-4 shadow-lg mx-auto card" style={{ maxWidth: "500px" }}>
              <Form as={BsForm}>
                <BsForm.Group className="mb-3">
                  <BsForm.Label>Nombres</BsForm.Label>
                  <Field name="nombres" type="text" className="form-control" placeholder="Tus nombres" />
                  <ErrorMessage name="nombres" component="div" className="text-danger" />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                  <BsForm.Label>Apellidos</BsForm.Label>
                  <Field name="apellidos" type="text" className="form-control" placeholder="Tus apellidos" />
                  <ErrorMessage name="apellidos" component="div" className="text-danger" />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                  <BsForm.Label>Dirección</BsForm.Label>
                  <Field name="direccion" type="text" className="form-control" placeholder="Tu dirección" />
                  <ErrorMessage name="direccion" component="div" className="text-danger" />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                  <BsForm.Label>Celular</BsForm.Label>
                  <Field name="celular" type="text" className="form-control" placeholder="Tu celular" />
                  <ErrorMessage name="celular" component="div" className="text-danger" />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                  <BsForm.Label>Edad</BsForm.Label>
                  <Field name="edad" type="number" className="form-control" placeholder="Tu edad" />
                  <ErrorMessage name="edad" component="div" className="text-danger" />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                  <BsForm.Label>Email</BsForm.Label>
                  <Field name="email" type="email" className="form-control" placeholder="Tu correo" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                  <BsForm.Label>Sexo</BsForm.Label>
                  <Field as="select" name="sexo" className="form-select">
                    <option value="">Selecciona tu sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </Field>
                  <ErrorMessage name="sexo" component="div" className="text-danger" />
                </BsForm.Group>

                <BsForm.Group className="mb-3">
                  <BsForm.Label>Mensaje</BsForm.Label>
                  <Field as="textarea" name="mensaje" rows="4" className="form-control" placeholder="Escribe tu mensaje..." />
                  <ErrorMessage name="mensaje" component="div" className="text-danger" />
                </BsForm.Group>

                <Button type="submit" variant="success" className="w-100 custom-btn">
                  Enviar por WhatsApp
                </Button>
              </Form>
            </Card>
          )}
        </Formik>
      </Container>
    </main>
  );
}

export default Contacto;