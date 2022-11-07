import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsCreateWithoutSkillInput } from './my-skills-create-without-skill.input';
import { Type } from 'class-transformer';
import { MySkillsCreateOrConnectWithoutSkillInput } from './my-skills-create-or-connect-without-skill.input';
import { MySkillsUpsertWithWhereUniqueWithoutSkillInput } from './my-skills-upsert-with-where-unique-without-skill.input';
import { MySkillsCreateManySkillInputEnvelope } from './my-skills-create-many-skill-input-envelope.input';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { MySkillsUpdateWithWhereUniqueWithoutSkillInput } from './my-skills-update-with-where-unique-without-skill.input';
import { MySkillsUpdateManyWithWhereWithoutSkillInput } from './my-skills-update-many-with-where-without-skill.input';
import { MySkillsScalarWhereInput } from './my-skills-scalar-where.input';

@InputType()
export class MySkillsUpdateManyWithoutSkillNestedInput {

    @Field(() => [MySkillsCreateWithoutSkillInput], {nullable:true})
    @Type(() => MySkillsCreateWithoutSkillInput)
    create?: Array<MySkillsCreateWithoutSkillInput>;

    @Field(() => [MySkillsCreateOrConnectWithoutSkillInput], {nullable:true})
    @Type(() => MySkillsCreateOrConnectWithoutSkillInput)
    connectOrCreate?: Array<MySkillsCreateOrConnectWithoutSkillInput>;

    @Field(() => [MySkillsUpsertWithWhereUniqueWithoutSkillInput], {nullable:true})
    @Type(() => MySkillsUpsertWithWhereUniqueWithoutSkillInput)
    upsert?: Array<MySkillsUpsertWithWhereUniqueWithoutSkillInput>;

    @Field(() => MySkillsCreateManySkillInputEnvelope, {nullable:true})
    @Type(() => MySkillsCreateManySkillInputEnvelope)
    createMany?: MySkillsCreateManySkillInputEnvelope;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    set?: Array<MySkillsWhereUniqueInput>;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    disconnect?: Array<MySkillsWhereUniqueInput>;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    delete?: Array<MySkillsWhereUniqueInput>;

    @Field(() => [MySkillsWhereUniqueInput], {nullable:true})
    @Type(() => MySkillsWhereUniqueInput)
    connect?: Array<MySkillsWhereUniqueInput>;

    @Field(() => [MySkillsUpdateWithWhereUniqueWithoutSkillInput], {nullable:true})
    @Type(() => MySkillsUpdateWithWhereUniqueWithoutSkillInput)
    update?: Array<MySkillsUpdateWithWhereUniqueWithoutSkillInput>;

    @Field(() => [MySkillsUpdateManyWithWhereWithoutSkillInput], {nullable:true})
    @Type(() => MySkillsUpdateManyWithWhereWithoutSkillInput)
    updateMany?: Array<MySkillsUpdateManyWithWhereWithoutSkillInput>;

    @Field(() => [MySkillsScalarWhereInput], {nullable:true})
    @Type(() => MySkillsScalarWhereInput)
    deleteMany?: Array<MySkillsScalarWhereInput>;
}
