import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsCreateWithoutMyRootsInput } from './my-skills-create-without-my-roots.input';
import { Type } from 'class-transformer';
import { MySkillsCreateOrConnectWithoutMyRootsInput } from './my-skills-create-or-connect-without-my-roots.input';
import { MySkillsUpsertWithWhereUniqueWithoutMyRootsInput } from './my-skills-upsert-with-where-unique-without-my-roots.input';
import { MySkillsCreateManyMyRootsInputEnvelope } from './my-skills-create-many-my-roots-input-envelope.input';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { MySkillsUpdateWithWhereUniqueWithoutMyRootsInput } from './my-skills-update-with-where-unique-without-my-roots.input';
import { MySkillsUpdateManyWithWhereWithoutMyRootsInput } from './my-skills-update-many-with-where-without-my-roots.input';
import { MySkillsScalarWhereInput } from './my-skills-scalar-where.input';

@InputType()
export class MySkillsUpdateManyWithoutMyRootsNestedInput {

    @Field(() => [MySkillsCreateWithoutMyRootsInput], {nullable:true})
    @Type(() => MySkillsCreateWithoutMyRootsInput)
    create?: Array<MySkillsCreateWithoutMyRootsInput>;

    @Field(() => [MySkillsCreateOrConnectWithoutMyRootsInput], {nullable:true})
    @Type(() => MySkillsCreateOrConnectWithoutMyRootsInput)
    connectOrCreate?: Array<MySkillsCreateOrConnectWithoutMyRootsInput>;

    @Field(() => [MySkillsUpsertWithWhereUniqueWithoutMyRootsInput], {nullable:true})
    @Type(() => MySkillsUpsertWithWhereUniqueWithoutMyRootsInput)
    upsert?: Array<MySkillsUpsertWithWhereUniqueWithoutMyRootsInput>;

    @Field(() => MySkillsCreateManyMyRootsInputEnvelope, {nullable:true})
    @Type(() => MySkillsCreateManyMyRootsInputEnvelope)
    createMany?: MySkillsCreateManyMyRootsInputEnvelope;

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

    @Field(() => [MySkillsUpdateWithWhereUniqueWithoutMyRootsInput], {nullable:true})
    @Type(() => MySkillsUpdateWithWhereUniqueWithoutMyRootsInput)
    update?: Array<MySkillsUpdateWithWhereUniqueWithoutMyRootsInput>;

    @Field(() => [MySkillsUpdateManyWithWhereWithoutMyRootsInput], {nullable:true})
    @Type(() => MySkillsUpdateManyWithWhereWithoutMyRootsInput)
    updateMany?: Array<MySkillsUpdateManyWithWhereWithoutMyRootsInput>;

    @Field(() => [MySkillsScalarWhereInput], {nullable:true})
    @Type(() => MySkillsScalarWhereInput)
    deleteMany?: Array<MySkillsScalarWhereInput>;
}
