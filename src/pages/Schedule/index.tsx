import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { SelectList } from "react-native-dropdown-select-list";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { Container, Title, ContainerCalendar } from "./styles";
import { InputForm } from "../../components/ComponentsInput/TextInput";
import { ScrollView } from "react-native";
import { Button } from "../../components/Buttons";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan.",
    "Fev.",
    "Mar",
    "Abril",
    "Mai",
    "Jun",
    "Jul.",
    "Ago",
    "Set.",
    "Out.",
    "Nov.",
    "Dez.",
  ],
  dayNames: [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "fr";

interface DetailProps {
  name: string;
  phone: string;
  date: string;
  hour: string;
  service: string;
  pagament: string;
  price: number;
}

export function Schedule() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [service, setService] = useState("");
  const [selectPagament, setSelectPagament] = useState("");

  function navigateDetail() {
    if(name === "" || phone === "" || date === "" || hour === "" || service === "" || selectPagament === "") {
      alert('preencha os campos vázios')
    }
    const selectedService = services.find(s => s.value === service);
  
    if (!selectedService) {
      console.log("Serviço não encontrado");
      return;
    }
  
    const price = parseFloat(selectedService.price.replace(',', '.'));
  
    const data: DetailProps = {
      name: name,
      phone: phone,
      date: date,
      hour: hour,
      service: selectedService.value,
      pagament: selectPagament,
      price: price,
    };
  
    navigation.navigate("ScheduleDetail", { params: data });
  }
  
  const services = [
    { key: "2", value: "Degradê", price: '45.00' },
    { key: "3", value: "Barba", price: '10.00' },
    { key: "5", value: "Social", price: '20.00' },
    { key: "6", value: "Degradê + Barba", price: '15.00' },
    { key: "7", value: "Social + Barba", price: '65.00' },
  ];
 
  const hours = [
    { key: "2", value: "08:00" },
    { key: "3", value: "09:00" },
    { key: "5", value: "10:00" },
    { key: "6", value: "11:00" },
    { key: "7", value: "12:00" },
  ];
  
  const pagament = [
    { key: "2", value: "PIX" },
    { key: "3", value: "Dinheiro" },
    { key: "4", value: "Cartão de Crédito" },
    { key: "6", value: "Cartão de Débito" },
  ];

  return (
    <Container>
      <Title>Olá, preencha o {"\n"}formulário abaixo.</Title>
      <ScrollView style={{ marginBottom: 30 }}>
        <InputForm
          value={name}
          onChangeText={setName}
          titleInputProps="Seu Nome"
          placeholder="Seu nome"
        />
        <InputForm
          value={phone}
          onChangeText={setPhone}
          titleInputProps="Seu Telefone"
          placeholder="Seu Telefone"
        />

        <ContainerCalendar>
          <Calendar
            style={{
              backgroundColor: "#363535",
              borderRadius: 7,
            }}
            theme={{
              calendarBackground: "#363535",
              textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "#ffff",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#fff",
              dayTextColor: "#fff",
              textDisabledColor: "#b6c1cd",
              arrowColor: "#ffff",
              monthTextColor: "#fff",
              agendaTodayColor: "#fff",
            }}
            onDayPress={(day) => {
              setDate(day.dateString);
            }}
            markedDates={{
              [date]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: "#85158F",
              },
            }}
          />
        </ContainerCalendar>

        <SelectList
          setSelected={(val) => setHour(val)}
          data={hours}
          save="value"
          inputStyles={{ color: "#fff", textDecorationColor: "red" }}
          searchicon={
            <FontAwesome
              name="search"
              size={15}
              color={"#fff"}
              style={{ marginRight: 10 }}
            />
          }
          arrowicon={<AntDesign name="down" size={19} color={"#fff"} />}
          closeicon={<AntDesign name="close" size={19} color={"#fff"} />}
          dropdownTextStyles={{ color: "#fff" }}
          boxStyles={{
            borderColor: "#363535",
            backgroundColor: "#363535",
            marginBottom: 10,
            marginTop: 5,
          }}
          placeholder="Escolha um Horário"
          notFoundText="Item não encontrado"
          searchPlaceholder="Digite..."
        />
        <SelectList
          setSelected={(val) => setService(val)}
          data={services}
          save="value"
          inputStyles={{ color: "#fff", textDecorationColor: "red" }}
          searchicon={
            <FontAwesome
              name="search"
              size={15}
              color={"#fff"}
              style={{ marginRight: 10 }}
            />
          }
          arrowicon={<AntDesign name="down" size={19} color={"#fff"} />}
          closeicon={<AntDesign name="close" size={19} color={"#fff"} />}
          dropdownTextStyles={{ color: "#fff" }}
          boxStyles={{
            borderColor: "#363535",
            backgroundColor: "#363535",
            marginBottom: 10,
            marginTop: 5,
          }}
          placeholder="Escolha um serviço"
          notFoundText="Item não encontrado"
        />
        <SelectList
          setSelected={(val) => setSelectPagament(val)}
          data={pagament}
          save="value"
          inputStyles={{ color: "#fff", textDecorationColor: "red" }}
          searchicon={
            <FontAwesome
              name="search"
              size={15}
              color={"#fff"}
              style={{ marginRight: 10 }}
            />
          }
          arrowicon={<AntDesign name="down" size={19} color={"#fff"} />}
          closeicon={<AntDesign name="close" size={19} color={"#fff"} />}
          dropdownTextStyles={{ color: "#fff" }}
          boxStyles={{
            borderColor: "#363535",
            backgroundColor: "#363535",
            marginBottom: 20,
            marginTop: 5,
          }}
          placeholder="Forma de Pagamento"
          notFoundText="Item não encontrado"
        />
        <Button
          onPress={() => navigateDetail()}
          title="Próximo"
        />
      </ScrollView>
    </Container>
  );
}
