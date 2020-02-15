import FormGroupInput from "~/components/Inputs/formGroupInput.vue";

import DropDown from "~/components/dropdown/Dropdown.vue";
import PaperTable from "~/components/table/PaperTable.vue";
import Button from "~/components/button/Button";

import Card from "~/components/Cards/Card.vue";
import ChartCard from "~/components/Cards/ChartCard.vue";
import StatsCard from "~/components/Cards/StatsCard.vue";

import SidebarPlugin from "~/components/SidebarPlugin/index";

let components = {
  FormGroupInput,
  Card,
  ChartCard,
  StatsCard,
  PaperTable,
  DropDown,
  SidebarPlugin
};

export default components;

export {
  FormGroupInput,
  Card,
  ChartCard,
  StatsCard,
  PaperTable,
  DropDown,
  Button,
  SidebarPlugin
};
